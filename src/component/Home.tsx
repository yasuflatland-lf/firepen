import React, { Component } from 'react';

import { FireIcon } from '@heroicons/react/solid';
import ServiceAccountSelector from './ServiceAccountSelector';
import { firestoreRenderer } from '../renderer/firestore';

class Home extends Component {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      query: '',
      out: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeQuery = this.handleChangeQuery.bind(this);
    this.handleChangeOut = this.handleChangeOut.bind(this);
  }

  handleChangeQuery(event: { target: { value: any; }; }) {
    this.setState({ query: event.target.value });
  }

  handleChangeOut(event: { target: { value: any; }; }) {
    this.setState({ out: event.target.value });
  }

  handleSubmit(event: { preventDefault: () => void }) {
    firestoreRenderer.runQuery(this.state.query);
    event.preventDefault();
  }

  render() {
    return (
      <>
        <main className="min-w-1/4">
          <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            {/* /End replace */}
            <div>
              <div className="md:grid md:grid-cols-1 md:gap-6">
                <div className="mt-5 md:mt-5">
                  <form onSubmit={this.handleSubmit}>
                    <div className="shadow sm:rounded-md sm:overflow-hidden">
                      <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                        <div>
                          <label
                            htmlFor="about"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Query
                          </label>
                          <div className="mt-1">
                            <textarea
                              id="about"
                              name="about"
                              rows={10}
                              className="shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                              placeholder="Type Firestore Query here"
                              value={ this.state.query }
                              onChange={this.handleChangeQuery}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="px-4 py-3 bg-gray-50 text-right sm:px-6 flex">
                        <div className="flex-1 min-w-0" />
                        <div className="flex lg:mt-0 min-w-375">
                          <div className="flex-1 lg:mt-0 absolute">
                            <div className="absolute -right-1">
                              <ServiceAccountSelector />
                            </div>
                          </div>
                          <div className="flex-1 ml-4 lg:mt-0">
                            <button
                              type="submit"
                              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                              <FireIcon
                                className="-ml-1 mr-2 h-5 w-5"
                                aria-hidden="true"
                              />
                              Run
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="hidden sm:block" aria-hidden="true">
              <div className="py-5">
                <div className="border-t border-gray-200" />
              </div>
            </div>

            <div>
              <div className="md:grid md:grid-cols-1 md:gap-6">
                <div className="mt-5 sm:mt-0">
                  <form action="#" method="POST">
                    <div className="shadow sm:rounded-md sm:overflow-hidden">
                      <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                        <div>
                          <label
                            htmlFor="about"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Result
                          </label>
                          <div className="mt-1">
                            <textarea
                              id="about"
                              name="about"
                              rows={10}
                              className="shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                              placeholder="The result of query is displayed here."
                              value={ this.state.out }
                              onChange={this.handleChangeOut}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default Home;
