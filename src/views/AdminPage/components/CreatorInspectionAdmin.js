import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import MenuAppBar from './MenuAppBar';
import { useEffect, useState } from "react";
import { Button } from '@material-ui/core';


function createData(list) {
  var tempList = []
  for(var i in list){
    tempList.push(
      {id : list[i].creatorID, 
        creatorNickName : list[i].creatorNickName,
        bankBookImageUrl : list[i].bankBookImageUrl, 
        bankName : list[i].bankName,
        businessNumber : list[i].businessNumber, 
        status : list[i].status,
        accountNumber : list[i].accountNumber
      }
    );
  }
  return tempList;
}


  export default function CreaterInspectionAdmin() {
    
    const [rows,setRows] = React.useState([])

    function creatorOk(e, params) {
      e.preventDefault();
      changeConfirm(params.id)
      alert("승인되었습니다.");
    }

    function creatorNo(e,params) {
      e.preventDefault();
      changereject(params.id)
          alert("승인 거절되었습니다.");
    }
      

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
          field: 'comfirm',
          headerName: '승인',
          type: 'button',
          width: 120,
          editable: true,
          renderCell : (params) => (
            <Button
              variant="contained"
              color="primary"
              size="small"
              style={{marginLeft:16}}
              onClick={(e) => {creatorOk(e, params)}}
            >승인</Button>
          )
        },
        {
          field: 'reject',
          headerName: '거절',
          type: 'button',
          width: 120,
          editable: true,
          renderCell : (params) => (
            <Button
              variant="contained"
              color="primary"
              size="small"
              style={{marginLeft:16}}
              onClick={(e) => {creatorNo(e, params)}}
            >거절</Button>
          )
        },
    ];

    //심사승인
    function changeConfirm(id) {
      console.log("메소드 실행잘됨")
      fetch('http://localhost:8081/admin/creatorOK/'+id)
      .then(res => res.json())
      .then((res) => {
        console.log(res)
        if(!res.status==200){
              console.log("혹시 여기왔니?")
              throw new Error('http 오류');
        }
      });
    }

    //심사 거절
    function changereject(id) {
      console.log("메소드 실행잘됨")
      fetch('http://localhost:8081/admin/creatorNo/'+id)
      .then(res => res.json())
      .then((res) => {
        console.log(res)
        if(!res.status==200){
              console.log("혹시 여기왔니?")
              throw new Error('http 오류');
        }
      });
    }

    //심사 전체
    useEffect(() => {
        fetch('http://localhost:8081/admin/inspection')
        .then(res => res.json())
        .then((res) => {
          console.log("아래")
          console.log(res)
          console.log("위")
          if(!res.status==200){
                console.log("혹시 여기왔니?")
                throw new Error('http 오류');
              }
              setRows(createData(res));
               if (res.success) {
          }
        })
      }, []);
    return (
        <div>
             <MenuAppBar></MenuAppBar>
             <div style={{ height: 800, width: '100%' }}>
            <h2>크리에이터 심사</h2>
             <DataGrid
                rows={rows}
                columns={columns}
                pageSize={10}
                checkboxSelection
                disableSelectionOnClick
                />
            </div>
        </div>
    )

}