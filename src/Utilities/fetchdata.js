import React from 'react';

export default async function fetchdata(url) {
  let apidata = await fetch(url);
  let result = await apidata.json();
  return result;
}
