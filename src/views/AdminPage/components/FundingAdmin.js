import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import MenuAppBar from './MenuAppBar';
import { useEffect, useState } from "react";
import BackerView from './BackerView';
import { Button } from '@material-ui/core';


function fundingView(list) {
  var tempList = []
  for(var i in list){
    tempList.push(
      {id : list[i].fundingId, 
      title : list[i].title, 
      summary : list[i].summary, 
      category : list[i].category, 
      postDate : list[i].postDate,
      status : list[i].status
      }
    );
  }
  return tempList;
}

//펀딩 상세보기로 이동
  function fundingSelect(e,params) {
    e.preventDefault();
    window.location.href = "/admin-fundingView/"+params.id;
  }
  
  export default function FundingAdmin() {

    const [rows,setRows] = React.useState([])

    const columns = [
      {
        field: 'id',
        headerName: 'id',
        type: 'number',
        width: 90 },
      {
        field: 'title',
        headerName: 'title',
        width: 150,
        type: 'text',
        editable: true,
      },
      {
          field: 'summary',
          headerName: 'summary',
          type: 'text',
          width: 120,
          editable: true,
        },
        {
          field: 'postDate',
          headerName: 'postDate',
          type: 'text',
          width: 200,
          editable: true,
        },
        {
          field: 'category',
          headerName: 'category',
          type: 'text',
          width: 150,
          editable: true,
        },
        {
          field: 'status',
          headerName: 'status',
          type: 'text',
          width: 150,
          editable: true,
        },
        {
          field: 'button',
          headerName: '상세보기',
          type: 'button',
          width: 150,
          editable: true,
          renderCell : (params) => (
            <Button
              variant="contained"
              color="primary"
              size="small"
              style={{marginLeft:16}}
              onClick={(e) => {fundingSelect(e, params)}}
            >상세보기</Button>
          )
        },
    ];

    useEffect(() => {
        fetch('http://localhost:8081/admin/funding')
        .then(res => res.json())
        .then((res) => {
          console.log("아래")
          console.log(res)
          console.log("위")
          if(!res.status==200){
            throw new Error('http 오류');
          }
          setRows(fundingView(res));
        })
      }, []);

    return (
      <div>
        <MenuAppBar></MenuAppBar>
          <h2>funding관리</h2>
        <div style={{ height: 800, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          checkboxSelection
          disableSelectionOnClick/>
        </div>
      </div>
    )
}