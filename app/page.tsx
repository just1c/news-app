import {categories} from "../constants";
import fetchNews from "../lib/fetchNews"
import NewsList from "./NewsList";
import response from "../response.json"

async function Homepage() {
  const news: NewsResponse = (await fetchNews(categories.join(',')))
  console.log(news)
  return (
    <div>
      <NewsList news={news} />
    </div>
  )
}

export default Homepage

//"http://api.mediastack.com/v1/news?access_key=164b1b9587179bd80d7cc29fc164a019&sort=published_desc&offset=0&limit=100&countries=us%2Cgb"