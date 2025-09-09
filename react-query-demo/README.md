# React Query Advanced Demo

This project demonstrates advanced React Query features including data fetching, caching, background refetching, and state management using the JSONPlaceholder API.

## 🚀 Features Implemented

### ✅ Step 1: React Query Setup
- **QueryClient Configuration**: Custom configuration with stale time, cache time (gcTime), and retry policies
- **QueryClientProvider**: Properly wrapped around the application
- **React Query DevTools**: Integrated for cache inspection and debugging

### ✅ Step 2: Advanced Data Fetching Component
- **PostsComponent**: Comprehensive component with multiple React Query features
- **Multiple Query Keys**: Different cache keys for posts list and individual posts
- **Conditional Queries**: Post details only fetch when selected
- **Query Parameters**: Dynamic post limit selection

### ✅ Step 3: Advanced Caching and Updating Features
- **Intelligent Caching**: 5-minute stale time for posts, 10-minute for individual posts
- **Background Refetching**: Automatic updates when data becomes stale
- **Manual Refetching**: On-demand data refresh functionality
- **Cache Invalidation**: Clear cache to force fresh data fetch
- **Prefetching**: Preload post details before user interaction
- **Cache Inspection**: Real-time cache status and metadata display

### ✅ Step 4: Enhanced Testing Features
- **Hide/Show Toggle**: Test cache persistence by unmounting/remounting components
- **Network Delay Simulation**: Artificial delays to demonstrate loading states
- **Multiple Loading States**: Different loading indicators for various operations
- **Error Handling**: Comprehensive error states with retry functionality
- **Cache Status Display**: Visual indicators for fresh, stale, and fetching states

## 🛠️ Installation & Setup

1. **Install Dependencies**:
   ```bash
   cd react-query-demo
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```

3. **Open Browser**: Navigate to `http://localhost:5173`

## 🧪 Testing React Query Features

### 1. **Caching Behavior**
- Load the application and wait for posts to appear
- Click "Hide Posts (Test Cache)" button
- Click "Show Posts (From Cache)" - data should load instantly from cache
- **Expected Result**: No network request, immediate data display

### 2. **Background Refetching**
- Wait 5 minutes after initial load (or modify staleTime for faster testing)
- Notice the status changes to "Stale (will refetch in background)"
- Focus/blur the browser window to trigger background refetch
- **Expected Result**: Data updates without showing loading state

### 3. **Manual Refetching**
- Click "🔄 Refetch Posts" button
- Observe loading state and network request
- **Expected Result**: Fresh data fetch with loading indicator

### 4. **Cache Invalidation**
- Load posts and note the timestamp
- Click "🗑️ Clear Cache" button
- Notice data disappears and refetches automatically
- **Expected Result**: Cache cleared, fresh data loaded

### 5. **Prefetching**
- Click "Preload" button on any post item
- Click "View Details" immediately after
- **Expected Result**: Post details load instantly (already in cache)

### 6. **Multiple Cache Keys**
- Change the limit dropdown (5, 10, 20, 50)
- Notice different cache keys for different limits
- Switch back to previous limit
- **Expected Result**: Each limit maintains its own cache

### 7. **Conditional Queries**
- Select different posts to view details
- Check browser DevTools Network tab
- **Expected Result**: Only selected posts are fetched individually

## 🔍 Monitoring & Debugging

### React Query DevTools
- **Location**: Bottom-right corner of the screen (red React Query icon)
- **Features**: 
  - View all cached queries
  - Inspect query states (fresh, stale, fetching)
  - Monitor cache sizes and timestamps
  - Force refetch or invalidate specific queries

### Browser DevTools
1. **Network Tab**: Monitor API calls and verify caching reduces requests
2. **Console**: View fetch operations with custom logging
3. **React DevTools**: Inspect component state and props

## 📊 Cache Strategy

| Feature | Configuration | Purpose |
|---------|--------------|---------|
| **Stale Time** | 5 min (posts), 10 min (individual posts) | When data becomes stale |
| **GC Time** | 10 minutes | How long unused data stays in memory |
| **Retry** | 3 attempts with exponential backoff | Error recovery |
| **Background Refetch** | On window focus, reconnect | Keep data fresh |
| **Prefetching** | Manual triggers | Improve perceived performance |

## 🌐 API Endpoints Used

- **Posts List**: `GET https://jsonplaceholder.typicode.com/posts?_limit={limit}`
- **Individual Post**: `GET https://jsonplaceholder.typicode.com/posts/{id}`

## 🎯 Learning Objectives Met

✅ **Data Fetching**: Efficient API interaction with axios  
✅ **Caching**: Intelligent cache management with stale time  
✅ **Background Updates**: Seamless data freshening  
✅ **Error Handling**: Robust error states and retry logic  
✅ **Performance**: Reduced network requests through caching  
✅ **User Experience**: Loading states and optimistic updates  
✅ **DevTools**: Cache inspection and debugging capabilities  

## 🔧 Configuration Details

The QueryClient is configured with:
```javascript
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 10,   // 10 minutes
      retry: 3,
    },
  },
});
```

## 📁 Project Structure

```
react-query-demo/
├── src/
│   ├── components/
│   │   └── PostsComponent.jsx    # Main data fetching component
│   ├── App.jsx                   # App with QueryClient setup
│   ├── main.jsx                  # Entry point
│   └── index.css                 # Styling
├── package.json                  # Dependencies
└── README.md                     # This file
```

## 🚀 Next Steps

To further explore React Query:
1. Try mutations (POST, PUT, DELETE operations)
2. Implement optimistic updates
3. Add pagination with infinite queries
4. Explore query synchronization across components
5. Test offline behavior and cache persistence

---

**Note**: This demo uses simulated network delays to better demonstrate loading states. In production, remove the artificial `setTimeout` delays in the fetch functions.
