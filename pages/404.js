import React from 'react'
import Navbar from '../components/Navbar'
import Error from '../components/404'

export async function getStaticProps() {
  return {
    props: {
      meta: {
        title:
          'Hulu Watch Party - Watch Hulu with Your Friends & Family Online',
        description:
          'Hulu Watch Party allows Hulu subscribers to watch shows & movies with friends from different locations online and chat with each other.',
        keywords:
          'Hulu Watch Party, Watch Party Hulu, How to use Hulu Watch Party, How to do Watch Party on Hulu, Hulu Party, How to Start a Watch Party on Hulu, How to have a Watch Party on Hulu, What to Watch on Hulu, What to Watch on Hulu Right Now, What to Binge Watch on Hulu',
        pageUrl: 'https://www.huluwatchparty.com/',
        featuredImage: '/logo.png',
      },
    },
  }
}
function error() {
  return (
    <div className="error_404 ">
      <div>
        <Navbar />
      </div>
      <Error />
    </div>
  )
}

export default error
