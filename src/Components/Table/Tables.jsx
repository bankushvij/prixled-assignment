import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import useTable from "./useTable";
import TableFooter from "./TableFooter";

import { useDispatch } from "react-redux";
import { postDetails } from "../../redux/reducer/Details/details.reducer";

function Tables({ tabledata, rowsPerPage }) {
  const history = useHistory();
  const continueToCheckout = () => history.push("/details");

  const [page, setPage] = useState(1);
  const { slice, range } = useTable(tabledata, page, rowsPerPage);
  

  const dispatch=useDispatch()
  const passingdata=(data)=>
  {
    dispatch(postDetails(data));
    continueToCheckout();
    window.location.href="/details";

  }
  return (
    <>
      <div className="md:px-32 bg-gray-100 py-8 w-full overflow-x-auto">
        <div className="shadow  rounded border-b border-gray-200">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-800 text-white overflow-x-auto">
              <tr>
                <th className=" text-left py-3 px-4 uppercase font-semibold text-sm">
                  Name
                </th>
                <th className=" text-left py-3 px-4 uppercase font-semibold text-sm">
                  state-province
                </th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Domains
                </th>
                <th className=" text-left py-3 px-4 uppercase font-semibold text-sm">
                  web-pages
                </th>
              </tr>
            </thead>
            <tbody>
              {/* mapping of table data */}
              {slice &&
                slice.map(
                  (data, index) =>
                     (
                      <>
                        <tr className="" key={index} id={index}>
                         
                            <td className=" text-left py-3 px-4 cursor-pointer"
                            >
                              <button onClick={()=>passingdata(data)}>

                              {data.name}
                              </button>
                            </td>
                          

                          <td className=" text-left py-3 px-4">
                            {data["state-province"]
                              ? data["state-province"]
                              : "-"}
                          </td>
                          <td className="text-left py-3 px-4">
                            <a
                              className="hover:text-blue-500"
                              href="tel:622322662"
                            >
                              {data.domains}
                            </a>
                          </td>
                          <td className="  text-left py-3 px-4">
                            <a
                              className="hover:text-blue-500"
                              href={data.web_pages}
                              target={"_blank"}
                            >
                              {data.web_pages}
                            </a>
                          </td>
                        </tr>
                      </>
                    )
                )}
            </tbody>
          </table>
        </div>
      </div>
      {/* paggination */}
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </>
  );
}

export default Tables;
