import React from 'react'
import { useRoutes } from 'react-router-dom'

const useRouteCustom = () => {
    const routes= useRoutes();
  return (
    routes;
  )
}

export default useRouteCustom
