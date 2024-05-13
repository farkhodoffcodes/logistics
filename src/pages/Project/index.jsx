import { useTranslation } from 'react-i18next';

export const Project = () => {
  const { t } = useTranslation();
  return (
    <div
      className="bg-[url('http://gsrlogistic.uz/static/media/back.e41e920c5b0118532b6f.jpg')] h-[100vh] w-[100%] 
  px-20 py-10 !bg-cover"
    >
      <div className='w-[100%]'>
        <input
          type='search'
          placeholder='🔍 Project name...'
          className='lg:w-4/12 w-5/12 ml-2 md:ml-0 ps-2 h-10 focus:outline-0 border sm:mt-0 mt-2'
        />
        <div className='mt-6 my-5'>
          <button className='bg-green-600 duration-200 hover:bg-green-700 text-white font-bold  md:text-lg text-sm py-1.5 px-8 border md:w-2/12 w-[40%] rounded'>
            {t('buttons.add')}
          </button>
          <button className='bg-green-600 duration-200 hover:bg-green-700 text-white font-bold  md:text-lg text-sm py-1.5 px-8 border md:w-2/12 w-[40%] rounded ml-[12px]'>
            {t('buttons.download')}
          </button>
        </div>
        <div className='flex w-full justify-around sm:justify-between items-center'>
          <span className='hidden sm:block'></span>
          <span className='me-5 pt-1.5 float-end'>Current Page: 0</span>
        </div>
        <div className='relative overflow-x-auto  sm:rounded-lg'>
          <table className='w-full text-sm text-left rtl:text-right text-gray-500 '>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 '>
              <tr>
                <th scope='col' className='px-6 py-3'>
                  №
                </th>
                <th scope='col' className='px-6 py-3'>
                  {t('warehouse.name')}
                </th>
                <th scope='col' className='px-6 py-3'>
                  {t('warehouse.status')}
                </th>
                <th scope='col' className='px-6 py-3'>
                  {t('warehouse.transport')}
                </th>
                <th scope='col' className='px-6 py-3'>
                  {t('table.date')}
                </th>
                <th scope='col' className='px-6 py-3'>
                  {t('warehouse.productcount')}
                </th>
                <th scope='col' className='px-6 py-3'>
                  {t('warehouse.totalweight')}
                </th>
                <th scope='col' className='px-6 py-3'>
                  {t('warehouse.totalcub')}
                </th>
                <th colSpan='4' scope='col' className='px-6 py-3 text-center'>
                  {t('table.action')}
                </th>
              </tr>
            </thead>
            <tbody>
              <div className='w-full flex justify-center items-center  h-[60vh]'>
                <img
                  src='http://gsrlogistic.uz/static/media/empty.21d0ca80f3723feb085f.png'
                  alt='Empty'
                  className='d-block w-44'
                />
              </div>
            </tbody>
          </table>
        </div>
        <div className='pagination-style'>
          <ul className='pagination flex gap-6 justify-content-center'>
            <li className='page-item disabled'>
              <span className='page-link' aria-label='Previous'>
                <span aria-hidden='true'>«</span>
              </span>
            </li>
            <li className='page-item active' aria-current='page'>
              <a href='#' className='page-link'>
                1
              </a>
            </li>
            <li className='page-item'>
              <a href='#' className='page-link'>
                2
              </a>
            </li>
            <li className='page-item'>
              <a href='#' className='page-link'>
                3
              </a>
            </li>
            <li className='page-item'>
              <a href='#' className='page-link' aria-label='Next'>
                <span aria-hidden='true'>»</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
