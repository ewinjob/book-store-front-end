function Edit({ open, onClose }) {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          open ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      />

      {/* Left drawer */}
      <aside
        className={`fixed top-0 left-0 h-full w-full max-w-sm bg-white z-50 shadow-2xl
        flex flex-col transform transition-transform duration-300 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2 className="text-xl font-bold text-gray-800">Edit Profile</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-100"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <form className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-5">
          {/* Image */}
          <div className="flex justify-center">
            <label htmlFor="profileImage" className="relative cursor-pointer group">
              <input type="file" accept="image/*" id="profileImage" hidden />
              <img
                src="DEFAULT_AVATAR_URL"
                alt="profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-gray-100 shadow"
              />
              <span className="absolute inset-0 rounded-full bg-black/40 text-white text-xs
                flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                Change
              </span>
            </label>
          </div>

          {/* Username */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-600">Username</label>
            <input
              type="text"
              placeholder="Enter username"
              className="border border-gray-300 rounded-lg px-3 py-2 outline-none
                focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              className="border border-gray-300 rounded-lg px-3 py-2 outline-none
                focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-600">New Password</label>
            <input
              type="password"
              placeholder="Enter new password"
              className="border border-gray-300 rounded-lg px-3 py-2 outline-none
                focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>
        </form>

        {/* Footer buttons */}
        <div className="flex gap-3 px-6 py-4 border-t bg-gray-50">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 py-2 rounded-lg bg-gray-200 text-gray-700 font-medium hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex-1 py-2 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700"
          >
            Save
          </button>
        </div>
      </aside>
    </>
  )
}

export default Edit