import React from 'react'
import './CommentsHeader.scss'
import {Button, Icon } from 'semantic-ui-react'

export  function CommentsHeader({amountComments}) {
  return (
    <div className="comments-header">
      <h4>{amountComments} comments</h4>
      <Button basic compact icon labelPosition="left">
        <Icon name="align left" />
        Sort By
      </Button>
     
    </div>
  )
}
