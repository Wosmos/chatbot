export function MessageSkeleton() {
  return (
    <div className='flex gap-3 animate-pulse'>
      <div className='h-6 w-6 rounded-full bg-gray-200 dark:bg-gray-700' />
      <div className='flex-1 space-y-3'>
        <div className='h-4 bg-gray-200 dark:bg-gray-700 rounded-lg w-3/4' />
        <div className='h-4 bg-gray-200 dark:bg-gray-700 rounded-lg w-1/2' />
        <div className='h-4 bg-gray-200 dark:bg-gray-700 rounded-lg w-2/3' />
      </div>
    </div>
  );
}