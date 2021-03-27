import React, { useState, useEffect } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core/";
import { ThumbUpAltOutlined } from "@material-ui/icons";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import useStyles from "./style";
import moment from "moment";
import {useHistory} from 'react-router-dom'
import { useDispatch } from "react-redux";
import { updatedIsSold,deleteaBook } from "../../../../actions/books";

const Book = ({ book }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  // const [book, setBook] = useState({});
  



  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={book?.selectedFile}
        title={book?.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{book?.bookName}</Typography>
        <Typography variant="body2">
          {moment(book?.createdAt).fromNow()}
        </Typography>
      </div>
      {/* <div className={classes.overlay2}>
        <Button color="primary" size="small" onClick={editaBook}>
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div> */}
      <Typography
        className={classes.title}
        gutterBottom
        variant="h5"
        component="h2"
      >
        ${book?.price}
      </Typography>
      <div className={classes.details}>
        <Typography variant="body2" color="secondary" component="h2">
          {book?.description}
        </Typography>
      </div>
      <CardContent>
        <Typography variant="body2" color="secondary" component="p">
          {book?.tags.map((tag) => `#${tag} `)}
        </Typography>
      </CardContent>
      {/* <CardActions className={classes.cardActions}>
        <Button size="medium" color="secondary" onClick={deleteBook}>
          <DeleteIcon />
        </Button>
        {
          book.isSold===false?(
            <Button variant="contained" color="primary" onClick={onClickSold}>
              Sold
            </Button>
          ):null
        }
      </CardActions> */}
    </Card>
  );
};

export default Book;
