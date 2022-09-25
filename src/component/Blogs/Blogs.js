import React from 'react';
import './Blogs.css';
import Accordion from '../../component/Accordion/Accordion.js'

const Blogs = () => {
     return (
          <div className="mt-[20em]">
               <h1 className="font-bigilla ml-10 text-7xl text-[#F74C25]">BLOGS QUESTION</h1>
               <div className="accordion-body wrapper">
                    <Accordion title="Authentication and Authorization Difference?">
                         Authentication and authorization are two vital information security processes that administrators use to protect systems and information. Authentication verifies the identity of a user or service, and authorization determines their access rights.
                    </Accordion>
                    <Accordion title="Why you use Firebase?">
                         The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.
                    </Accordion>
                    <Accordion title="What Is Include firebase Firestore?">
                         Cloud Firestore is a NoSQL document database that lets you easily store, sync, and query data for your mobile and web apps
                    </Accordion>
               </div>
          </div>
     );
};

export default Blogs;