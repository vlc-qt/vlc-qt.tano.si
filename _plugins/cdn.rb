module Jekyll
  module AssetFilter
    def cdn(url)
      prefix = ''
      if @context.registers[:site].config['production']
        prefix = @context.registers[:site].config['cdn_url']
      end

      "#{prefix}#{url}"
    end
  end
end

Liquid::Template.register_filter(Jekyll::AssetFilter)
