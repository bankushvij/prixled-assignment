import React, { useEffect } from "react";

const TableFooter = ({ range, setPage, page, slice }) => {
  useEffect(() => {
    if (slice.length < 1 && page !== 1) {
      setPage(page - 1);
    }
  }, [slice, page, setPage]);

  return (
    
    <div className="flex w-full  items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className=" w-100 sm:flex w-100 sm:flex-1 sm:items-center sm:justify-between ">
        <div >
          <p className="text-sm w-100 text-gray-700">
            Showing <span className="font-medium">{(page-1)*10}</span> to{" "}
            <span className="font-medium">{((page-1)*10)+10}</span> of{" "}
            <span className="font-medium">{range.length*10}</span> results
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm overflow-x-auto w-80"
            aria-label="Pagination "
          >
            {range.map((el, index) => (
              
                 <a
                href="#"
                aria-current="page"
                className="relative z-10 inline-flex items-center r px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white focus:z-20 "
                onClick={() => setPage(el)}
              >
                {el}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default TableFooter;
