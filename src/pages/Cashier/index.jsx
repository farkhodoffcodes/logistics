import styled from 'styled-components';
import 'flowbite';
import { useTranslation } from 'react-i18next';
// import { bgImage } from '../../assets/images';

export const Cashier = () => {
  const { t } = useTranslation();
  return (
    <>
      <Container>
        <div className='tool-menu'>
          <div>
            <button className='btn'>{t('buttons.add')}</button>
            <button className='btn-dwl'>{t('buttons.download')}</button>
          </div>
          <div className='srch'>
            <form className='max-w-sm mx-auto'>
              <label htmlFor='underline_select' className='sr-only'>
                Underline select
              </label>
              <select id='underline_select' className='search'>
                <option selected>Select project search</option>
                <option value='US'>Select project search</option>
              </select>
            </form>
            <div date-rangepicker className='flex items-center'>
              <div className='relative'>
                <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                  <svg
                    className='w-4 h-4 text-gray-500 dark:text-gray-400'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path d='M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z' />
                  </svg>
                </div>
                <input
                  name='start'
                  type='text'
                  className='input'
                  placeholder='Select date start'
                />
              </div>
              <span className='mx-4 text-gray-500'>to</span>
              <div className='relative'>
                <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                  <svg
                    className='w-4 h-4 text-gray-500 dark:text-gray-400'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path d='M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z' />
                  </svg>
                </div>
                <input
                  name='end'
                  type='text'
                  className='input'
                  placeholder='Select date end'
                />
              </div>
            </div>
          </div>
        </div>

        <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
          <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 '>
              <tr>
                <th scope='col' className='px-6 py-3'>
                  #
                </th>
                <th scope='col' className='px-6 py-3'>
                  {t('table.username')}
                </th>
                <th scope='col' className='px-6 py-3'>
                  Project name
                </th>
                <th scope='col' className='px-6 py-3'>
                  Product name
                </th>
                <th scope='col' className='px-6 py-3'>
                  DATE
                </th>
                <th scope='col' className='px-6 py-3'>
                  PRICE
                </th>
                <th scope='col' className='px-6 py-3'>
                  ACTION
                </th>
                <th scope='col' className='px-6 py-3'>
                  CALCULATED
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className='info bg-white border-b'>
                <td className='class="px-6 py-4'>1</td>
                <td>John</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  .tool-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 50px;

    .btn,
    .btn-dwl {
      background-color: rgb(22 163 74);
      color: #fff;
      padding: 10px;
      margin-right: 10px;
      border-radius: 5px;
      border: 1px solid #fff;
      font-weight: bold;
    }
    .btn {
      width: 100px;
    }
    .btn-dwl {
      width: 150px;
    }
    .search {
      padding: 10px;
      border-radius: 5px;
      color: grey;
    }
    .input {
      padding: 8px 0px 8px 35px;
      border-radius: 5px;
    }
    .srch {
      display: flex;
      gap: 20px;
    }
  }
`;
