
json.set! @comment.id do
  json.partial! 'comment', comment: @comment
end