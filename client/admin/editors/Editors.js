import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import Flash from "../Flash";
import { listEditors } from "../../helper/api-editors";
import { getEditorsCertificate } from "../../helper/api-pdf";

const parseDate = (date) => {
  if (!date) return ''
  const d = new Date(date)
  return d.toLocaleString()
}


const saveEditorsCertificate = (selected) => {
  getEditorsCertificate(selected).then((blob) => {
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Editors-Certificate.zip`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  })
}


const statusWithColor = (status) => {
  if (status == 'disabled')
    return <div className="text-red-600">disabled</div>
  else
    return <div className="text-green-600">enabled</div>
}

export default function Editors(props) {
  const [editors, setEditors] = useState([])
  const [selected, setSelected] = useState([])

  const handleSelect = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((item) => item !== id))
    }
    else {
      setSelected([...selected, id])
    }
  }

  const handleSelectAll = () => {
    if (selected.length) {
      setSelected([])
    }
    else {
      setSelected(editors.map((editor) => editor.id))
    }
  }

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal

    listEditors(signal).then((data) => {
      if (data && data.error) {
        console.error(data.error)
      } else if (data) {
        setEditors(data)
      }
    })

    return function cleanup() {
      abortController.abort()
    }
  }, [])

  return (
    <div>
      <div className="float-right font-bold">Total Rows: {editors.length}</div>
      <div className="flex gap-6">
        <Link className="w-24 p-2 mb-4 text-center bg-green-700 rounded text-slate-200" to={`/admin/editors/add`}>Add New</Link>
        {selected.length !== 0 && <button className="w-24 p-2 text-center bg-green-700 rounded text-slate-200" onClick={() => saveEditorsCertificate(selected)}>Certificate</button>}
      </div>
      {editors.length !== 0 &&
        <table className="min-w-full text-sm font-light border text-start dark:border-neutral-500">
          <thead className="font-medium border-b dark:border-neutral-500">
            <tr>
              <th scope="col"
                class="border-r px-6 py-4 dark:border-neutral-500"><input type="checkbox" checked={selected.length !== 0 && selected.length === editors.length} onChange={handleSelectAll} /></th>
              <th scope="col"
                class="border-r px-6 py-4 dark:border-neutral-500">S.NO.</th>
              <th scope="col"
                class="border-r px-6 py-4 dark:border-neutral-500">PICTURE</th>
              <th scope="col"
                class="border-r px-6 py-4 dark:border-neutral-500">NAME</th>
              <th scope="col"
                class="border-r px-6 py-4 dark:border-neutral-500">CATEGORY</th>
              <th scope="col"
                class="border-r px-6 py-4 dark:border-neutral-500 w-4">DEGREE</th>
              <th scope="col"
                class="border-r px-6 py-4 dark:border-neutral-500">EMAIL</th>
              <th scope="col"
                class="border-r px-6 py-4 dark:border-neutral-500">POST</th>
              <th scope="col"
                class="border-r px-6 py-4 dark:border-neutral-500">AFFILIATION</th>
              {/* <Th>COUNTRY</Th> */}
              <th scope="col"
                class="border-r px-6 py-4 dark:border-neutral-500">PHONE</th>
              <th scope="col"
                class="border-r px-6 py-4 dark:border-neutral-500">STATUS</th>
              <th scope="col"
                class="border-r px-6 py-4 dark:border-neutral-500">CREATED</th>
              {/* <Th>UPDATED</Th> */}
              <th scope="col"
                class="border-r px-6 py-4 dark:border-neutral-500">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {editors.map((editor, index) => {
              return (
                <tr className="border-b dark:border-neutral-500" key={`editor-${index + 1}`}>
                  <td className="p-2 font-medium border-r whitespace-wrap dark:border-neutral-500"><input type="checkbox" checked={selected.includes(editor.id)} onChange={() => { handleSelect(editor.id) }} /></td>
                  <td className="p-2 font-medium border-r whitespace-wrap dark:border-neutral-500">{index + 1}</td>
                  <td className="p-2 font-medium border-r whitespace-wrap dark:border-neutral-500">
                    <img
                      className="w-12 h-12 rounded-full"
                      src={editor.picture ?
                        `/assets/editors/${editor.picture}` :
                        '/assets/editors/avatar.png'
                      }
                    />
                  </td>
                  <td className="p-2 font-medium border-r whitespace-wrap dark:border-neutral-500">{editor.name}</td>
                  <td className="p-2 font-medium border-r whitespace-wrap dark:border-neutral-500">{editor.category}</td>
                  <td className="w-4 p-2 font-medium break-all border-r whitespace-wrap dark:border-neutral-500">{editor.degree}</td>
                  <td className="p-2 font-medium break-all border-r whitespace-wrap dark:border-neutral-500">{editor.email}</td>
                  <td className="p-2 font-medium border-r whitespace-wrap dark:border-neutral-500">{editor.post}</td>
                  <td className="p-2 font-medium border-r whitespace-wrap dark:border-neutral-500">{editor.content}</td>
                  {/* <Td>{editor.country}</Td> */}
                  <td className="p-2 font-medium border-r whitespace-wrap dark:border-neutral-500">{editor.phone}</td>
                  <td className="p-2 font-medium border-r whitespace-wrap dark:border-neutral-500">{statusWithColor(editor.status)}</td>
                  <td className="p-2 font-medium border-r whitespace-wrap dark:border-neutral-500">{parseDate(editor.creation)}</td>
                  {/* <Td>{parseDate(editor.modification)}</Td> */}
                  <td className="p-2 font-medium border-r whitespace-wrap dark:border-neutral-500"><Link className="font-bold text-green-700" to={`/admin/editors/${editor.id}`}>EDIT</Link></td>
                </tr>
              )
            })
            }
          </tbody>
        </table>
      }
    </div>
  )
}