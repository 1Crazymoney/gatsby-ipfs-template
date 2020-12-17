import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic02 from '../assets/images/pic02.jpg'
import pic05 from '../assets/images/pic05.jpg'

// Get the IPFS hash from the BCH Blockchain.
import MemoGet from 'memo-get-gatsby'
const memoGet = new MemoGet()

// import BCHJS from '@chris.troutner/bch-js'

let _this

class HomeIndex extends React.Component {
  constructor(props) {
    super(props)
    _this = this

    this.state = {
      ipfsHash: 'No Result',
      ipfsHashLink: '',
    }
  }

  async componentDidMount() {
    const addr = `bitcoincash:qr7u857krgsvq0dwe8rzlt5rcx35r6hnmu6glavtx0`
    const hash = await memoGet.read(addr)
    console.log(`hash: ${hash}`)
    this.setState({
      ipfsHash: hash,
      ipfsHashLink: `https://ipfs.io/ipfs/${hash}`,
    })
  }

  render() {
    return (
      <Layout>
        <Helmet
          title="Uncensorable Publishing"
          meta={[
            { name: 'description', content: 'Uncensorable Publishing' },
            {
              name: 'keywords',
              content:
                'ipfs, bch, bitcoin, bitcoin cash, web, publishing, gatsby, template',
            },
          ]}
        ></Helmet>

        <Banner />

        <div id="main">
          <section id="two">
            <div className="inner">
              <header className="major">
                <h2>Explore the Deep Web</h2>
              </header>
              <p>
                This internet is bigger than just the web. You can access this
                website via other links on these other deep-web networks:
              </p>
              <ul>
                <li>
                  Web:{' '}
                  <a href="https://uncensorablepublishing.com">
                    UncensorablePublishing.com
                  </a>
                </li>
                <li>
                  Tor:{' '}
                  <a href="http://mscdffxifbhxiww6k6ub2buzdn3khqzoxpcbnbhrzkypdmkqz4u5hwid.onion">
                    mscdffxifbhxiww6k6ub2buzdn3khqzoxpcbnbhrzkypdmkqz4u5hwid.onion
                  </a>
                </li>
                <li>
                  IPFS:{' '}
                  <a
                    href={_this.state.ipfsHashLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {this.state.ipfsHash}
                  </a>
                </li>
              </ul>
            </div>
          </section>

          <section id="one" className="tiles">

            <article style={{ backgroundImage: `url(${pic05})` }}>
              <header className="major">
                <h3>Videos</h3>
                <p>Learn about censorship and how you can help fight it:</p>
                <ul>
                  <li>
                    <a href="https://www.youtube.com/watch?v=RlNVyatwd5M" target="_blank" rel="noreferrer" style={{backgroundColor: '#8ea9e8'}}>
                      <b>
                      How Governments Censor Content
                      </b>
                    </a>
                  </li>

                  <li>
                    <a href="https://www.youtube.com/watch?v=Ez9YXpu_Chs" target="_blank" rel="noreferrer" style={{backgroundColor: '#8ea9e8'}}><b>
                      How Uncensorable Publishing Works
                    </b></a>
                  </li>
                </ul>
              </header>
            </article>

            <article style={{ backgroundImage: `url(${pic02})` }}>
              <header className="major">
                <h3>Diagrams</h3>
                <p>Read more about the construction of uncensorable technology</p>
              </header>
              <Link to="https://troutsblog.com/about" target="_blank" className="link primary"></Link>
            </article>





          </section>


        </div>
      </Layout>
    )
  }
}

export default HomeIndex
