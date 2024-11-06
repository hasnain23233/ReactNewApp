import React, { Component } from 'react'
import NewItem from './NewItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class New extends Component {
  static defaultProps = {
    country: 'us',
    pageSize: 6,
    technology : "technology"
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    technology: PropTypes.string
  }
  capitalize = (str)=>{
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
    constructor(props){
        super(props)
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults:0
        }
        document.title = `${this.capitalize(this.props.catageoy)}_ News App`
    }
    async dataFetch(){
      this.props.setProgress(10)
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catageoy}&apiKey=${this.props.apiKey}&page=${this.state.page}&page=1&pageSize=${this.props.pageSize}`
      this.setState({
        loading : true
      })
      let data = await fetch(url)
      this.props.setProgress(50)
      let priveweData = await data.json()
      this.props.setProgress(70)
      console.log(priveweData)
      this.setState({
        articles: priveweData.articles,
        totalResults: priveweData.totalResults,
        loading : false
      })
      this.props.setProgress(100)
    }
    async componentDidMount(){
      this.dataFetch()
    }   
    fetchData = async()=>{
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catageoy}&apiKey=${this.props.apiKey}&page=${this.state.page}&page=1&pageSize=${this.props.pageSize}`;  
      this.setState({page: this.state.page + 1})
      this.setState({
        loading : true
      })
      this.props.setProgress(30)
      let data = await fetch(url)
      this.props.setProgress(60)
      let priveweData = await data.json()
      console.log(priveweData)
      this.props.setProgress(80)
      this.setState({
        articles:this.state.articles.concat(priveweData.articles),
        totalResults: priveweData.totalResults,
        loading : false
      })
      this.props.setProgress(100)
    }

  render() {
    return (
    
      <div className='bg-dark mt-1'>
        <p className='text-light text-center'>New App - {this.capitalize(this.props.catageoy)} Top Headlines</p>
        <div className="text-center">
           {this.state.loading && <Spinner/>}
        </div>
        <InfiniteScroll
        dataLength={this.state.articles.length} //This is important field to render the next data
        next={this.fetchData}
        hasMore={this.state.articles.length !== this.state.totalResults}
        loader={this.state.loading && <Spinner/>}>
          <div className="container">
            <div className="row">
                {this.state.articles.map((element)=>{
                    return <div className="col-md-4" key={element.url}>
                      <NewItem title={element.title?element.title.slice(0 , 30):""} description={element.description?element.description.slice(0 , 88):""} imageUrl={element.urlToImage} newUrl={element.url} Time={element.publishedAt} author={element.author}/>
                    </div>
                })} 
            </div>
          </div>
        </InfiniteScroll>
      </div>
    )
  }
}

export default New
