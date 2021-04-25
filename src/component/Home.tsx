import React from 'react';

import Head from './Head';

export default function Home() {
  return (
    <>
      <Head />
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Replace with your content */}
          {/* /End replace */}
          <div>
            <div className="md:grid md:grid-cols-1 md:gap-6">
              <div className="mt-5 md:mt-5">
                <form action="#" method="POST">
                  <div className="shadow sm:rounded-md sm:overflow-hidden">
                    <div className="px-4 py-5 bg-white space-y-6 sm:p-6">

                      <div>
                        <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                          Query
                        </label>
                        <div className="mt-1">
                      <textarea
                        id="about"
                        name="about"
                        rows={3}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder="Type Firestore Query here"
                        defaultValue={''}
                      />
                        </div>
                      </div>

                    </div>
                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                      <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Run Query
                      </button>
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
                        <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                          Result
                        </label>
                        <div className="mt-1">
                      <textarea
                        id="about"
                        name="about"
                        rows={3}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder="The result of query is displayed here."
                        defaultValue={''}
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
};
