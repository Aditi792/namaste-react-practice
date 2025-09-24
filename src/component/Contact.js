const Contact = () => {
    return (
      <div className="flex justify-center items-center min-h-screen"> 
        <div className="w-full max-w-md p-6 bg-white shadow-xl rounded-lg"> 
          <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
  
          <div className="flex flex-col space-y-4"> 
            <input
              className="border p-2 rounded"
              id="name"
              placeholder="Name"
            />
  
            <input
              className="border p-2 rounded"
              id="email" 
              placeholder="Email"
            />
  
            <textarea
              className="border p-2 rounded resize-none"
              rows="3"
              placeholder="Enter query" 
            ></textarea>
  
            <button className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition cursor-pointer">
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  };
  export default Contact;
  