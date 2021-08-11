import React from 'react'
import { backoffice_service } from './../services/http/requests/'

export const attrs = {
    fetchPhotos: () => new Promise(async (resolve, reject) => {
        const response = await backoffice_service().fakeUsers()
        attrs.photos = response.data.data.results
        resolve()
    }),
    photos: [],
};

export const PhotosContext = React.createContext(
    attrs
);