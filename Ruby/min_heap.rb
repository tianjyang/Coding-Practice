class MinHeap

  attr_accessor :heap
  def initialize()
    @heap = []
  end

  def add_value(val)
    @heap.push(val)
    self.heapify_up
  end

  def peak
    @heap[0]
  end

  def remove_value
    if @heap.length == 1
      return @heap.shift
    end
    output = @heap.shift
    last_val = @heap.pop
    @heap.unshift(last_val)
    self.heapify_down
    output
  end

  def heapify_up
    current_node = @heap.last
    current_idx = @heap.length-1
    until current_idx <= 0
      parent_idx = (current_idx-1)/2
      parent_node = @heap[parent_idx]
      if current_node < parent_node
        surrogate = parent_node
        @heap[parent_idx] = current_node
        @heap[current_idx] = surrogate
        current_idx=parent_idx
      else
        current_idx = -1
      end
    end
  end

  def heapify_down
    current_node = @heap.first
    current_idx = 0
    while current_idx < @heap.length
      left_child = @heap[2*current_idx+1] || Float::INFINITY
      right_child = @heap[2*current_idx+2] || Float::INFINITY
      if current_node > left_child && left_child < right_child
        surrogate = left_child
        @heap[2*current_idx+1] = current_node
        @heap[current_idx] = surrogate
        current_idx = 2*current_idx + 1
      elsif current_node > right_child && right_child <= left_child
        surrogate = right_child
        @heap[2*current_idx+2] = current_node
        @heap[current_idx] = surrogate
        current_idx = 2*current_idx + 2
      else
        current_idx = Float::INFINITY
      end
    end
  end
end

a = MinHeap.new
a.add_value(5)
a.add_value(2)
a.add_value(1)
a.add_value(10)
a.add_value(8)
a.add_value(8)
a.add_value(8)
a.add_value(8)
a.add_value(3)
a.add_value(4)


puts a.remove_value
puts a.remove_value
puts a.remove_value
puts a.remove_value
puts a.remove_value
puts a.remove_value
puts a.remove_value
puts a.remove_value
puts a.remove_value
puts a.remove_value
