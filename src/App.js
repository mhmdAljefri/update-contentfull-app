import React from 'react';
import './App.css';
import Card from './components/Card';
import client from './functions/contentful';
import Banner from './components/Banner';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends React.Component {
  state = {
    categories: [],
    fetching: false,
  }

  componentDidMount() {
    const _this = this;
    _this.setState({ fetching: true }) // set fetching true to show loader img or text
    client.getEntries({
      content_type: 'category',
    })
      .then(function (entries) {
        // log the title for all the entries that have it
        entries.items.forEach(function (entry) {
          if (entry.fields.title) {
            console.log(entry.fields.title)
          }
        })
        _this.setState({ categories: entries.items })
      }).finally(function () {
        _this.setState({ fetching: false })
      })
  }

  render() {
    return (
      <div className="App" >
        {this.state.fetching ? 'Loadin...' : false}
        <Header />
        <main>
          <Banner />
          <section>
            {this.state.categories.map(function (item) {
              return (
                <div>
                  <div className="d-flex jc-space-between ai-center">
                    <h2>{item.fields.name}</h2>
                    <p>All Posts</p>
                  </div>
                  <div className="posts-wrapper">
                    {item.fields.posts.map(function () {
                      return <Card img='tech' />
                    })}
                  </div>
                </div>
              )
            })}
          </section>
        </main>
        <Footer />
      </div >
    );
  }
}

export default App;
