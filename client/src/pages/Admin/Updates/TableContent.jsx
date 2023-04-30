import moment from 'moment';
import React from 'react';

const TableContent = ({ data, editPost, deletePost }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Index</th>
          <th>Image</th>
          <th>Description</th>
          <th>Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td><img src={item.image} height={50} width={50} alt="post" /></td>
            <td>{item.content}</td>
            <td>{ moment(update?.createdAt).format('MMMM DD, YYYY')}</td>
            <td>
              <button onClick={() => editPost(index)}>Edit</button>
              <button onClick={() => deletePost(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableContent;
