import React from 'react'
import PostTable from '@/components/posts/PostTable'
import BackButton from '@/components/BackButton'
import PostPagination from '@/components/posts/PostPagination'

function Editpage() {
  return (
    <>
    <BackButton text='Go Back' link='/' />
    <PostTable/>
    <PostPagination/>
    </>
  )
}



export default Editpage
