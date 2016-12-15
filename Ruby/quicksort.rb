def quicksort(array)
  if array.length == 0
    return []
  end

  if array.length == 1
    return array
  end

  pivot = array.shift()
  left_array = []
  right_array = []
  array.each do |el|
    if el < pivot
      left_array.push(el)
    else
      right_array.push(el)
    end
  end
  return quicksort(left_array) + [pivot] + quicksort(right_array)
end

puts "quicksort should sort an array"
puts "quicksort([1,3,2,4]) => [1,2,3,4]"
puts quicksort([1,3,2,4])
