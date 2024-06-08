'use client';

import dynamic from 'next/dynamic';
import { useRef, useState, useEffect } from 'react';
import { isAuthenticated } from '../../../utils/Auth';

// Dynamically import the JoditEditor to avoid server-side rendering issues
const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });
const url = 'http://www.t2p.vercel.app';
// const url = 'http://localhost:3000';



function Page() {
  const editor = useRef(null);
  const [text, setText] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [download, setDownload] = useState(false);
  const [data, setData] = useState({});
  const [error, setError] = useState({
    state: false,
    message: ''
  });

  // Effect to delete files on page reload
  useEffect(() => {
    const deleteFiles = async () => {
      try {
       let res = await fetch(`${url}/api/delete-files`, {
          method: 'DELETE'
        });
        res =await res.json();
        console.log(res);
      } catch (error) {
        console.error('Error deleting files:', error);
      }
    };

    deleteFiles();
  }, []);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const generateResponse = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!isAuthenticated && isChecked) {
      setError({ state: true, message: 'Please remove the check or login to proceed' });
      setTimeout(() => {
        setError({ state: false, message: '' });
      }, 2000);
      setLoading(false);
      return;
    }

    if (text.length < 50) {
      setError({ state: true, message: 'Text length should be greater than 50' });
      setTimeout(() => {
        setError({ state: false, message: '' });
      }, 2000);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${url}/api/generate-pdf`, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain'
        },
        body: text
      });

      const data = await response.json();
      setData(data);
      if (response.ok) {
        setDownload(true);
      } else {
        setError({ state: true, message: data.message || 'Something went wrong' });
        setTimeout(() => {
          setError({ state: false, message: '' });
        }, 2000);
      }
    } catch (error) {
      setError({ state: true, message: error.message });
      setTimeout(() => {
        setError({ state: false, message: '' });
      }, 2000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="min-h-[80vh] mt-4 poppins w-full md:w-[90%] mx-auto">
        <label htmlFor="OrderNotes" className="sr-only">Enter text</label>

        <div className="overflow-hidden">
          <JoditEditor
            ref={editor}
            value={text}
            id="OrderNotes"
            onBlur={newText => setText(newText)}
            onChange={newContent => {}}
            className="w-full p-2 resize-none border-2 border-purple-300 rounded-sm mb-2 align-top sm:text-sm"
            rows="20"
            placeholder="Enter Text to generate pdf..."
          />

          <fieldset>
            <legend className="sr-only">Checkboxes</legend>

            <div className="space-y-2">
              <label
                htmlFor="Option"
                className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50 has-[:checked]:bg-blue-50"
              >
                <div className="flex items-center">
                  &#8203;
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    className="size-4 rounded border-gray-300"
                    id="Option"
                  />
                </div>

                <div>
                  <strong className="font-bold text-gray-900">USE AI</strong>
                  <p className="mt-1 text-pretty text-sm text-gray-700">
                    Using AI ensures that every part of the PDF is generated with proper indentation/formatting
                  </p>
                </div>
              </label>
            </div>
          </fieldset>

          <div className="flex items-center justify-center w-full md:justify-end md:gap-2 py-3 px-3">
            <button
              onClick={() => setText('')}
              type="button"
              className="rounded bg-gray-200 w-1/2 px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-600"
            >
              Clear
            </button>

            <button
              type="button"
              disabled={loading}
              onClick={generateResponse}
              className="rounded bg-indigo-600 w-1/2 px-3 py-1.5 w-24 h-8 text-sm font-medium text-white hover:bg-indigo-700"
            >
              {!loading ? 'Generate' : <span className="loading loading-spinner"></span>}
            </button>
          </div>
        </div>

        {error.state && (
          <div role="alert" className="alert alert-error transition-all translate-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{error.message}</span>
          </div>
        )}
        {download && (
          <div role="alert" className="alert alert-success transition-all translate-x-3 flex items-center w-full justify-between px-4">
            
            <span className='text-white poppins'>{data.message}</span>
            <a className='btn btn-secondary p-3' download href={`${url}/${data.filePath}`}>Download</a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Page;
