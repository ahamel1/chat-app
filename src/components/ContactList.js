import React from 'react';
import Contact from './Contact';

const users = [
    {
      name: 'Robert Reyes',
      avatar: 'https://randomuser.me/api/portraits/men/28.jpg',
      isOnline: false
    },
    {
      name: 'Nellie Caldwell',
      avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
      isOnline: true
    },
    {
      name: 'Vernon Mason',
      avatar: 'https://randomuser.me/api/portraits/men/84.jpg',
      isOnline: true
    },
    {
      name: 'Erica Hunt',
      avatar: 'https://randomuser.me/api/portraits/women/87.jpg',
      isOnline: false
    },
    {
      name: 'Juanita Phillips',
      avatar: 'https://randomuser.me/api/portraits/women/55.jpg',
      isOnline: true
    }
  ];

  const ContactList = () => (
      <div>
          {users.map(user => (
              <Contact name = {user.name} avatar = {user.avatar} isOnline = {user.isOnline} />
          ))}
      </div>

  )
export default ContactList;