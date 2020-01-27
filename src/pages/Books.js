import React, { useState } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import axios from "axios";


function bookSearch() {
    const [books, setBooks] = useState([]);

    const searchBooks = query => {
       axios 
       .get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
       .then(googBooks => {
           setBooks(googBooks.data.items);
       });
    };

}

class Books extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    description: "",
    image: "",
    link: ""
  };

  componentDidMount() {
      this.loadBooks();
    }
    
    loadBooks = () => {
        API.getBooks()
        .then(res =>
            this.setState({ books: res.data, title: "", author: "", description: "", image: "", link: ""})
            )
            .catch(err => console.log(err));
    };
        

  deleteBook = id => {
      API.deleteBook(id)
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
  };

  handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
          [name]: value
      });
  };

  handleFormSubmit = (event, query) => {
      event.preventDefault();
      if(query) {
          return this.searchBooks(query);
      }
      
  }
  
  render() {
      return (
          <Container fluid>
              <Row>
                  <Col size="md-6">
                      <Jumbotron>
                          <h1>What Books Should I Read?</h1>
                      </Jumbotron>
                      <form>
                          <Input
                            value={this.state.title}
                            onChange={this.handleInputChange}
                            name="title"
                            placeholder="Title (required)"
                          />
                          <Input
                            value={this.state.author}
                            onChange={this.handleInputChange}
                            name="author"
                            placeholder="Author (required)"
                          />
                          <div className="apiBooks">

                          </div>

                          <FormBtn
                            disabled={!(this.state.author && this.state.title)}
                            onClick={this.handleFormSubmit}
                            >
                                Submit Book
                            </FormBtn>
                      </form>
                  </Col>
                  <Col size="md-6 sm-12">
                      <Jumbotron>
                          <h1>Books On My List</h1>
                      </Jumbotron>
                      {this.state.books.length ? (
                          <List>
                              {this.state.books.map(book => (
                                  <ListItem key={book._id}>
                                      <Link to={"/books/" + book._id}>
                                          <strong>
                                              {book.title} by {book.author}
                                          </strong>
                                      </Link>
                                  </ListItem>
                              ))}
                          </List>
                      ) : (
                          <h3>No Results to Display</h3>
                      )}
                  </Col>
              </Row>
          </Container>
      );
  }
}

export default Books;