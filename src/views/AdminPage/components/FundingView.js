import render from 'dom-serializer';
import { DataGrid } from '@material-ui/data-grid';
import MenuAppBar from './MenuAppBar';
import { useEffect, useState } from "react";
import * as React from 'react';

const columns = [
    {
      field: 'id',
      headerName: 'id',
      type: 'number',
      width: 90 },
    {
      field: 'userName',
      headerName: 'userName',
      width: 120,
      type: 'text',
      editable: true,
    },
    {
      field: 'nickName',
      headerName: 'nickName',
      width: 120,
      type: 'text',
      editable: true,
    },
    {
      field: 'mobile',
      headerName: 'mobile',
      type: 'text',
      sortable: false,
      width: 140
    },
    {
      field: 'email',
      headerName: 'email',
      type: 'text',
      width: 150,
      editable: true,
    },
    {
      field: 'emailCert',
      headerName: 'emailCert',
      type: 'text',
      width: 140,
      editable: true,
    },
    {
      field: 'registDate',
      headerName: 'registDate',
      type: 'text',
      width: 200,
      editable: true,
    },
    {
      field: 'secessionDate',
      headerName: 'secessionDate',
      type: 'object',
      width: 160,
      editable: true,
    },
    {
      field: 'authoritiy',
      headerName: 'authoritiy',
      type: 'object',
      width: 120,
      editable: true,
    },
  ];

function backerDataList(list) {
    var backerTempList = []
    console.log("가져오니?")
    console.log(list.memberId)
    console.log("여기 제발와줘")
    for(var i in list){
      backerTempList.push({id : list.memberId,
        userName : list.userName, nickName : list.nickName,
        mobile : list.mobile,  email : list.email, 
        emailCert : list.emailCert, registDate : list.registDate, 
        secessionDate : list.secessionDate, userState : list.userState,
        authoritiy : list.authorities});
      }
    return backerTempList;
  }

export default function BackerView() {
    const [rows,setRows] = React.useState([])
    const viewId = window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1)
    useEffect(() => {
        fetch('http://localhost:8081/admin/backerView/'+viewId)
        .then(res => res.json())
        .then((res) => {
          console.log("아래")
          console.log(res)
          console.log("위")
          if(!res.status==200){
                console.log("혹시 여기왔니?")
                throw new Error('http 오류');
              }
              setRows(backerDataList(res));
               if (res.success) {
          }
        })
      }, []);
    return (
      <div>
        <MenuAppBar></MenuAppBar>
         {/* <button onClick={backerData}>버튼임</button> */}
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