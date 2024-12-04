var merge = function(nums1, m, nums2, n) {
    m--
    n--
    let index = nums1.length - 1
    while(index >= 0){
        if(n > -1 && m > -1 && nums1[m] >= nums2[n]){
            nums1[index] = nums1[m]
            nums1[m] = nums2[n]
            m--
        } else if(n > -1){
            nums1[index] = nums2[n--]
        }
        index--
    }
};


var merge = function(nums1, m, nums2, n) {
    let i=0, j=0
    while (j < nums2.length) { // hasta que recurramos nums2
      if (i > m + j) { // terminamos de recorrer nums1
        nums1[m+j] = nums2[j]
        i++
        j++
      } else if (nums1[i] <= nums2[j]) { 
        i++         
      } else { // tenemos que correr los elementos e insertar
        for (let k=m+j; k > i; k--) {
          nums1[k] = nums1[k-1]
        }
        nums1[i] = nums2[j]
        i++
        j++
      }
    }
};