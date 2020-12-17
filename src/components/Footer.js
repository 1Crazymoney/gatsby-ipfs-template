/* eslint-disable */

import React from 'react'

// Get the IPFS hash from the BCH Blockchain.
import MemoGet from 'memo-get-gatsby'
const memoGet = new MemoGet()

let _this

class Footer extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      ipfsHash: 'No Result',
      ipfsHashLink: '',
    }

    _this = this
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
      <footer id="footer">
        <div className="inner">
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/PSF_DAO"
                className="icon alt  fab fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://t.me/permissionless_software"
                className="icon alt  fab fa-telegram"
              >
                <span className="label">Telegram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Permissionless-Software-Foundation"
                className="icon alt  fab fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          <p>
            Template maintained by the{' '}
            <a href="https://psfoundation.cash" target="_blank">
              Permissionless Software Foundation
            </a>
            .
          </p>
          <p>Mirrors of this site:</p>
          <ul>
            <li>
              <b>Clearweb</b>:{' '}
              <a href="https://uncensorablepublishing.com">
                UncensorablePublishing.com
              </a>
            </li>
            <li>
              <b>Tor</b>:{' '}
              <a href="http://mscdffxifbhxiww6k6ub2buzdn3khqzoxpcbnbhrzkypdmkqz4u5hwid.onion">
                mscdffxifbhxiww6k6ub2buzdn3khqzoxpcbnbhrzkypdmkqz4u5hwid.onion
              </a>
            </li>
            <li>
              <b>IPFS</b>:{' '}
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
      </footer>
    )
  }
}

export default Footer
