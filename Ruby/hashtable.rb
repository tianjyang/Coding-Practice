class MyHashTable
  attr_accessor :hash_map
  def initialize(size = 10)
    @hash_map = []
    size.times do
      @hash_map.push([])
    end
    @size = size
  end

  def []=(key,val)
    bucket = key.hash % @size
    @hash_map[bucket] = val
  end

  def [](key)
    bucket = key.hash % @size
    @hash_map[bucket]
  end

end
