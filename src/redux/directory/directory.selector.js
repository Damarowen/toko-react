import { createSelector } from 'reselect'

//* pull put state directory
const selectDirectory = state => state.directory

export const selectDirectoryKategori = createSelector(
    [selectDirectory],
    //* dari root reducer
    directory => directory.kategori
)