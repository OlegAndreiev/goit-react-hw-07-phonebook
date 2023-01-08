import React from 'react';
import css from './SectionContacts.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact, useGetContactsQuery } from '../../Redux/contactsSlice';

const ContactsList = () => {
  const { data } = useGetContactsQuery();
  console.log(data);
  // const dispatch = useDispatch();
  // // const allContacts = useSelector(state => state.contacts);
  // const inputValue = useSelector(state => state.filter);
  // const filteredContacts = data.filter(contact =>
  //   contact.name.toLowerCase().includes(inputValue.toLowerCase())
  // );
  // console.log(filteredContacts);

  // return (
  //   <ul className={css.contactsList}>
  //     {data.map(el => (
  //       <div className={css.contactsListContainer} key={el.id}>
  //         <svg
  //           className={css.contactsListIcon}
  //           viewBox="0 0 1024 1024"
  //           version="1.1"
  //           xmlns="http://www.w3.org/2000/svg"
  //         >
  //           <path d="M512 96C282.2 96 96 282.2 96 512s186.2 416 416 416 416-186.2 416-416S741.8 96 512 96z m286.6 527.8c-16.2-5.2-47.4-6.8-59-20.8-5.8-7-2-33.2-2-33.2 50.4-2.8 62-12.2 62-12.2 7.8-4.6 4.2-5.4 0.2-12.2-21.8-36.6-12-83-13-123.2-0.8-33.4-9.6-70-40-88.8-15.2-9.4-39.4-13.8-62.8-13.8-19 0-37.4 2.8-50.6 8.2-84.8 34-34.8 146.4-63.8 210.8-5 10.8-12.2 14.6 0.4 21 0 0 15 8.8 57.8 12.6 0 0 0.6 25.2 0 27.8-2.2 9.8-23.6 16.6-31.6 18.8-5.4 1.4-17.4 5-32.8 11.4-7.4 3-6.2 13.8 1.6 15.2 7.8 1.4 16.2 3.4 23 5.8 0 0 52.8 12 92 50 26.4 25.4 36.2 55.2 40 89.2 1 9-3.4 17.8-11 23l-11.4 7.2c-3.8 2.2-8.4-0.4-8.6-4.8 0-59-35.6-111-91.6-130.4-27-9.4-56.2-10-83.2-19.4-8.2-2.8-24.4-6.2-27.8-15.6-3.2-9.2-3.2-20-3.8-29.6-0.4-7.6-0.6-15.2-0.6-22.8 0-5 12.8-15.6 15.6-20.2 10.8-18 11.8-42.2 13.8-62.6 17.4 4.8 19.6-27.4 22.6-37.2 2.2-6.8 10-41.8-5.2-47.2 5-8.8 7-19.6 8.4-29.4 4-25.6 5.6-53.6-2.2-78.6-16.2-52-66-81.2-118.6-82.8-53.4-1.8-107 23.8-127 75.6-9.6 25.2-8.8 52.6-5.6 79 1.4 12 3.4 25.4 9.4 36.2-12.8 5.6-9 35.4-6.8 42.6 3.2 10.2 6 46.8 24.2 41.8 1.6 16.2 3.4 32.8 7.8 48.6 3 10.6 9.2 19.6 16.4 27.8 3.6 4 5.4 4.4 5.2 9.6-0.2 15.6 0.2 32.4-3.8 47.6s-37.4 21.6-50.8 24.4c-29.6 6-57.2 9.4-82.8 23C169.6 641.2 152 578 152 512c0-95.8 38.4-188 106.4-255.4C325.4 190 414.2 152.8 508.6 152c95.2-0.8 187.4 36.2 255.6 103 69.6 68.2 108 159.8 108 257 0 49.8-10 97.8-29 142.2-11.2-14-26.8-24.6-44.6-30.4z" />
  //         </svg>
  //         <li className={css.contactsListItem} key={el.id}>
  //           {el.name}
  //           <br />
  //           {el.number}
  //         </li>
  //         {/* <button
  //           className={css.contactsListButton}
  //           onClick={() => dispatch(removeContact(el.id))}
  //         >
  //           Delete
  //         </button> */}
  //       </div>
  //     ))}
  //   </ul>
  // );
};

export default ContactsList;
