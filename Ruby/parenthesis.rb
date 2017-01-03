def parenthesis(num)
  if num == 0
    return []
  elsif num == 1
    return ["()"]
  elsif num == 2
    return ["(())","()()"]
  else
    prev_parenthesis = parenthesis(num-1)
    output = []
    prev_parenthesis.each do |paren_string|
      idx = 0
      paren_string.each_char do |el|
        if el == "("
          substring = paren_string[0..idx]
          substring.concat("()")
          substring.concat(paren_string[idx+1...paren_string.length])
          output.push(substring)
        end
        idx += 1
      end
    end
    extra_case = ""
    num.times do |i|
      extra_case.concat("()")
    end
    output.push(extra_case)
    return output
  end
end


puts parenthesis(4)
