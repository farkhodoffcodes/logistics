import { useTranslation } from 'react-i18next';

export const Warehouse = () => {
  const { t } = useTranslation();
  return (
    <div
      className="bg-[url('http://gsrlogistic.uz/static/media/back.e41e920c5b0118532b6f.jpg')] w-[100%] 
  px-20 py-10 !bg-cover bg-center bg-fixed"
    >
      <div className='w-[100%]'>
        <input
          type='search'
          placeholder='🔍 Warehouse name...'
          className='lg:w-4/12 w-5/12 ml-2 md:ml-0 ps-2 h-10 focus:outline-0 border sm:mt-0 mt-2'
        />
        <div className='flex justify-between my-5'>
          <button className='bg-green-600 hover:bg-green-700 text-white font-bold py-1.5 px-8  rounded'>
            {t('warehousebtn.addwarehouse')}
          </button>
          <h1>
            <b>{t('warehousebtn.p')}</b>
          </h1>
          <span></span>
        </div>
        <div className='mt-4 flex flex-wrap justify-between overflow-x-auto'>
          <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
              <tr>
                <th scope='col' className='px-6 py-3'>
                  №
                </th>
                <th scope='col' className='px-6 py-3'>
                  {t('warehouse.name')}
                </th>
                <th scope='col' className='px-6 py-3'>
                  {t('warehouse.totalcub')}
                </th>
                <th scope='col' className='px-6 py-3'>
                  {t('warehouse.productcount')}
                </th>
                <th scope='col' className='px-6 py-3'>
                  {t('warehouse.totalweight')}
                </th>
                <th scope='col' className='px-6 py-3'>
                  {t('warehouse.edit')}
                </th>
                <th scope='col' className='px-6 py-3'>
                  {t('warehouse.delete')}
                </th>
                <th scope='col' className='px-6 py-3'>
                  {t('warehouse.viewmore')}
                </th>
                <th scope='col' className='px-6 py-3'>
                  {t('warehouse.download')}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <div className='w-full flex justify-center items-center  h-[60vh]'>
                  <img
                    src='http://gsrlogistic.uz/static/media/empty.21d0ca80f3723feb085f.png'
                    alt='Empty'
                    className='d-block w-44'
                  />
                </div>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
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
