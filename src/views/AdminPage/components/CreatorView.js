import render from 'dom-serializer';
import { DataGrid } from '@material-ui/data-grid';
import MenuAppBar from './MenuAppBar';
import { useEffect, useState } from "react";
import * as React from 'react';

const columns = [
    {
      field: 'id',
      headerName: '아이디',
      type: 'text',
      width: 100 
    },
    {
      field: 'creatorNickName',
      headerName: '닉네임',
      width: 170,
      type: 'text',
      editable: true,
    },
    {
      field: 'bankBookImageUrl',
      headerName: '통장사본',
      width: 150,
      type: 'text',
      editable: true,
    },
    {
      field: 'bankName',
      headerName: '은행명',
      width: 150,
      type: 'text',
      editable: true,
    }, 
    {
      field: 'accountNumber',
      headerName: '계좌번호',
      width: 150,
      type: 'text',
      editable: true,
    },
    {
      field: 'businessNumber',
      headerName: '사업자번호',
      type: 'text',
      sortable: false,
      width: 140,
    },
    {
        field: 'status',
        headerName: '상태',
        type: 'text',
        width: 120,
        editable: true,
      },

      {
        field: 'authorities',
        headerName: '권한',
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
        disableSelectionOnClick
      />
      </div>
    </div>
  );
}  