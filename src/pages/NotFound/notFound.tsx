import React from 'react';
import notFound from './notFound.module.css';

export default function NotFound() {
  return (
    <div className={notFound.errorPage}>
        <div className={notFound.errorCode}>404</div>
        <p>Soory! Page not found</p>
        <a href="javascript:;" className={notFound.errorBtn}>Back to Homepage</a>
    </div>
  )
}
