import render from 'dom-serializer';
import { DataGrid } from '@material-ui/data-grid';
import MenuAppBar from './MenuAppBar';
import { useEffect, useState } from "react";
import * as React from 'react';

const columns = [
    {
      field: 'id',
      headerName: 'id',
      type: 'text',
      width: 90 
    },
    {
      field: 'creatorNickName',
      headerName: 'creatorNickName',
      width: 170,
      type: 'text',
      editable: true,
    },
    {
      field: 'bankBookImageUrl',
      headerName: 'bankBookImageUrl',
      width: 150,
      type: 'text',
      editable: true,
    },
    {
      field: 'bankName',
      headerName: 'bankName',
      width: 150,
      type: 'text',
      editable: true,
    }, 
    {
      field: 'accountNumber',
      headerName: 'accountNumber',
      width: 150,
      type: 'text',
      editable: true,
    },
    {
      field: 'businessNumber',
      headerName: 'businessNumber',
      type: 'text',
      sortable: false,
      width: 140,
    },
    {
        field: 'status',
        headerName: 'status',
        type: 'text',
        width: 120,
        editable: true,
      },

      {
        field: 'authorities',
        headerName: 'authorities',
        type: 'text',
        width: 150,
        editable: true,
      }
  ];

function CreatorDataList(list) {
  var tempList = []
  for(var i in list){
    tempList.push(
      {id : list.creatorID, 
      creatorNickName : list.creatorNickName,
      bankBookImageUrl : list.bankBookImageUrl, 
      bankName : list.bankName,
      businessNumber : list.businessNumber, 
      status : list.status,
      authorities : list.authorities, 
      accountNumber : list.accountNumber
      }
    );
  }
  return tempList;
}

export default function CreatorView() {
  const [rows,setRows] = React.useState([])
  const viewId = window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1)
  useEffect(() => {
      fetch('http://localhost:8081/admin/creatorView/'+viewId)
      .then(res => res.json())
      .then((res) => {
        console.log("아래")
        console.log(res)
        console.log("위")
        if(!res.status==200){
          throw new Error('http 오류');
        }
        setRows(CreatorDataList(res));
      })
    }, []); 
  return (
    <div>
      <MenuAppBar></MenuAppBar>
      <h2>상세페이지</h2>
      <div style={{ height: 800, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick
      />
      </div>
    </div>
  );
}  