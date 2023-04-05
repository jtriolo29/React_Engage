import DropDown from "./DropDown";
import { formatPhoneNumber } from "../../utils/functions/formattingFunctions";

export default function table({
  tableHeaders,
  tableData,
  gridLayout,
  dropDownOptions,
  dropDownState,
  setDropDownState,
}) {
  return (
    <section
      className={`w-full ${gridLayout} shadow-2xl rounded-lg overflow-y-auto h-full`}
    >      
      {console.log("Table Headers:  " + tableHeaders)} 
      {console.log("Grid Layout:  " + gridLayout)}
      <table className=" w-full m-auto relative">
        <thead className="bg-gray-50 w-full sticky top-0">
          <tr>
            {tableHeaders.map((item) => (
              <th
                key={item}
                scope="col"
                className="px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider 
                  break-words text-center"
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 break-words overflow-y-hidden">
          {console.log("Table data:  " + tableData)}
          {tableData.map(function (data, index) {
            var reviewValues = [];
            console.log("Review Values" + reviewValues);
            Object.entries(data).forEach(function ([key, value]) {
              console.log("Key:  " + key);
              if (key === "data") {
                let date = new Date(value);
                reviewValues.push(date.toLocaleDateString());
                return;
              }
              if (key === "phoneNumber") {
                return reviewValues.push(formatPhoneNumber(value));
              }
              reviewValues.push(value.toString());
            });
            console.log(reviewValues);
            return (
              <tr key={index} className="overflow-scroll">
                {reviewValues.map((prop, index) => {
                  return (
                    <td
                      key={index}
                      className="px-6 py-4 break-words text-center overflow-hidden text-sm text-gray-500"
                    >
                      {prop}
                      {console.log("Prop: " + prop)}
                    </td>
                  );
                })}
                {dropDownOptions != null ? (
                  <td className="px-6 py-4 break-words text-sm text-gray-500">
                    <DropDown
                      list={dropDownOptions}
                      parentStateSelect={dropDownState}
                      setParentStateSelect={setDropDownState}
                    />
                    {console.log("Drop Down Options:  " + dropDownOptions)}
                  </td>
                ) : null}
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
