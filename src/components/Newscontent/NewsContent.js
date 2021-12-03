import axios from 'axios';
import React ,{Component} from 'react'
import { Container } from "react-bootstrap";
import './NewsContent.css'
class NewsContent extends Component {
    constructor(props){
        super(props)
        this.state = {
           category:"general",
           loadMore:20
        }

    const fetchNews = () => {
            const {category,loadMore} = this.state
            const news = axios.get(
                `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_API_KEY}&pageSize=${loadMore}&category=${category}`
            );
        }
    }
    render(){
        return (
            <Container>
              <div className="content">
                  <div className="category">
                      <span>
                          For the best experience use inshorts app on your smartphone
                      </span>
                      <img
                          alt="app store"
                          height="80%"
                          src="https://assets.inshorts.com/website_assets/images/appstore.png"
                      />
                      <img
                          alt="play store"
                          height="80%"
                          src="https://assets.inshorts.com/website_assets/images/playstore.png"
                      />
                  </div>
  
  
              </div>
          </Container> 
       
      )
    }
   
}

export default NewsContent
