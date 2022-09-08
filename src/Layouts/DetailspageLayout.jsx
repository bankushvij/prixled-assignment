import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getDetails } from "../redux/reducer/Details/details.reducer";

function DetailspageLayout() {
  const [collegeDetail, setCollegeDetails] = useState();

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getDetails()).then((data) => {
      setCollegeDetails(data.payload);
    });
  }, [dispatch]);
  
  // table ui
  return (
    <div>
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
              {collegeDetail && (
                <>
                  <tr>
                    <td className=" text-left py-3 px-4 cursor-pointer">
                      {collegeDetail.name}
                    </td>

                    <td className=" text-left py-3 px-4">
                      {collegeDetail["state-province"]
                        ? collegeDetail["state-province"]
                        : "-"}
                    </td>
                    <td className="text-left py-3 px-4">
                      <a className="hover:text-blue-500" href="tel:622322662">
                        {collegeDetail.domains}
                      </a>
                    </td>
                    <td className="  text-left py-3 px-4">
                      <a
                        className="hover:text-blue-500"
                        href={collegeDetail.web_pages}
                        target={"_blank"}
                      >
                        {collegeDetail.web_pages}
                      </a>
                    </td>
                  </tr>
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DetailspageLayout;
