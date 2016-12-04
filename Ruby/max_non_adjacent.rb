$COUNT = 0
$MEMO = Hash.new(false)

def max_non_adjacent(array)
  $COUNT += 1
  #first base case
  if array.nil? || array.length == 0
    return 0
  end
  if array.length == 1
    return array[0]
  end

  #second base case
  if array.length == 2
    return array.max
  end

  #third base case
  if array.length == 3
    first_arg = array[0] + array[2]
    second_arg = array[1]
    return [first_arg, second_arg].max
  end

  output_sums = []

  array.each_with_index do |el,idx|
    left_array = array.slice(0,idx-1)
    if $MEMO[left_array]
      left_array_max = $MEMO[left_array]
    else
      $MEMO[left_array] = max_non_adjacent(left_array)
      left_array_max = $MEMO[left_array]
    end
    right_array = array.slice(idx + 2,array.length-1)
    if $MEMO[right_array]
      right_array_max = $MEMO[right_array]
    else
      $MEMO[right_array] = max_non_adjacent(right_array)
      right_array_max = $MEMO[right_array]
    end
    output_sums.push(el + left_array_max + right_array_max)
  end
  output_sums.max
end

puts "max sum is #{max_non_adjacent([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])}"
puts "number of calls was #{$COUNT}"
