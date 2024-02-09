
class PaginationHelper {
  constructor(collection, itemsPerPage) {
    // The constructor takes in an array of items and an integer indicating how many
    // items fit within a single page
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }

  itemCount() {
    // returns the number of items within the entire collection
    return this.collection.length;
  }

  pageCount() {
    // returns the number of pages
    let itemCount = this.itemCount();
    let itemsPerPage = this.itemsPerPage;

    return Math.ceil(itemCount / itemsPerPage);
  }

  pageItemCount(pageIndex) {
    // returns the number of items on the current page. page_index is zero based.
    // this method should return -1 for pageIndex values that are out of range
    let pageCount = this.pageCount();
    let itemCount = this.itemCount();
    let itemsPerPage = this.itemsPerPage;
    let fullPageCount = Math.floor(itemCount / itemsPerPage);

    if (pageIndex < 0 || pageIndex > pageCount - 1) {
      return -1;
    } else if (itemCount % itemsPerPage !== 0) {
      return pageIndex > fullPageCount - 1
        ? itemCount % itemsPerPage
        : itemsPerPage;
    } else {
      return itemsPerPage;
    }
  }

  pageIndex(itemIndex) {
    // determines what page an item is on. Zero based indexes
    // this method should return -1 for itemIndex values that are out of range
    let itemCount = this.itemCount();
    let itemsPerPage = this.itemsPerPage;

    if (itemIndex < 0 || itemIndex >= itemCount) {
      return -1;
    } else {
      return Math.floor(itemIndex / itemsPerPage);
    }
  }
}
