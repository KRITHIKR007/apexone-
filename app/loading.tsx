export default function Loading() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="text-center">
                {/* Animated Logo/Spinner */}
                <div className="relative w-16 h-16 mx-auto mb-6">
                    <div className="absolute inset-0 border-4 border-slate-200 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-indigo-600 rounded-full border-t-transparent animate-spin"></div>
                </div>

                {/* Loading Text */}
                <h2 className="text-lg font-medium text-slate-900 mb-2">Loading...</h2>
                <p className="text-sm text-slate-500">Please wait a moment</p>
            </div>
        </div>
    );
}
