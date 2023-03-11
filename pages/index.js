import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Text from '../components/Text'
import Text2 from '../components/Text2'
import Fask_ques from '../components/Fask_ques'
import Footer from '../components/Footer'
import Script from 'next/script'

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

const Home = () => {
  return (
    <div>
      <Script src="https://cdn.tailwindcss.com" />

      <Navbar />
      <Banner />
      <Text />
      <Text2 />
      <Fask_ques />
      <Footer />

      <Script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></Script>
    </div>
  )
}

export default Home
