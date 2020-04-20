var documenterSearchIndex = {"docs":
[{"location":"extending/#Extending-Polynomials-1","page":"Extending","title":"Extending Polynomials","text":"","category":"section"},{"location":"extending/#","page":"Extending","title":"Extending","text":"The AbstractPolynomial type was made to be extended via a rich interface.","category":"page"},{"location":"extending/#","page":"Extending","title":"Extending","text":"AbstractPolynomial","category":"page"},{"location":"extending/#Polynomials.AbstractPolynomial","page":"Extending","title":"Polynomials.AbstractPolynomial","text":"AbstractPolynomial{T}\n\nAn abstract container for various polynomials. \n\nProperties\n\ncoeffs - The coefficients of the polynomial\nvar - The indeterminate of the polynomial\n\n\n\n\n\n","category":"type"},{"location":"extending/#","page":"Extending","title":"Extending","text":"A polynomial's  coefficients  are  relative to some basis. The Polynomial type relates coefficients  [a0, a1,  ..., an], say,  to the  polynomial  a0 +  a1*x + a2*x^  + ... +  an*x^n,  through the standard  basis  1,  x,  x^2, ..., x^n.  New polynomial  types typically represent the polynomial through a different  basis. For example,  CheyshevT uses a basis  T_0=1, T_1=x,  T_2=2x^2-1,  ...,  T_n  =  2xT_{n-1} - T_{n-2}.  For this type  the  coefficients  [a0,a1,...,an] are associated with  the polynomial  a0*T0  + a1*T_1 +  ...  +  an*T_n.","category":"page"},{"location":"extending/#","page":"Extending","title":"Extending","text":"To implement a new polynomial type, P, the following methods should be implemented.","category":"page"},{"location":"extending/#","page":"Extending","title":"Extending","text":"note: Note\nPromotion rules will always coerce towards the Polynomial type, so not all methods have to be implemented if you provide a conversion function.","category":"page"},{"location":"extending/#","page":"Extending","title":"Extending","text":"As always, if the default implementation does not work or there are more efficient ways of implementing, feel free to overwrite functions from common.jl for your type.","category":"page"},{"location":"extending/#","page":"Extending","title":"Extending","text":"Function Required Notes\nConstructor x \nType function ((::P)(x)) x \nconvert(::Polynomial, ...)  Not required, but the library is built off the Polynomial type, so all operations are guaranteed to work with it. Also consider writing the inverse conversion method.\ndomain x Should return an  AbstractInterval\nvander  Required for fit\ncompanion  Required for roots\nfromroots  By default, will form polynomials using prod(variable(::P) - r) for reach root r\n+(::P, ::P)  Addition of polynomials\n-(::P, ::P)  Subtraction of polynomials\n*(::P, ::P)  Multiplication of polynomials\ndivrem  Required for gcd\nvariable  Convenience to find monomial x in new  basis","category":"page"},{"location":"extending/#","page":"Extending","title":"Extending","text":"Check out both the Polynomial and ChebyshevT for examples of this interface being extended.","category":"page"},{"location":"polynomials/polynomial/#Polynomial-1","page":"Polynomial","title":"Polynomial","text":"","category":"section"},{"location":"polynomials/polynomial/#","page":"Polynomial","title":"Polynomial","text":"DocTestSetup = quote\n  using Polynomials\nend","category":"page"},{"location":"polynomials/polynomial/#","page":"Polynomial","title":"Polynomial","text":"Polynomial","category":"page"},{"location":"polynomials/polynomial/#Polynomials.Polynomial","page":"Polynomial","title":"Polynomials.Polynomial","text":"Polynomial{T<:Number}(coeffs::AbstractVector{T}, var=:x)\n\nConstruct a polynomial from its coefficients a, lowest order first, optionally in terms of the given variable x. x can be a character, symbol, or string.\n\nIf p = a_n x^n + ldots + a_2 x^2 + a_1 x + a_0, we construct this through Polynomial([a_0, a_1, ..., a_n]).\n\nThe usual arithmetic operators are overloaded to work with polynomials as well as with combinations of polynomials and scalars. However, operations involving two polynomials of different variables causes an error.\n\nExamples\n\nDocTestSetup = quote\n    using Polynomials\nend\n\njulia> Polynomial([1, 0, 3, 4])\nPolynomial(1 + 3*x^2 + 4*x^3)\n\njulia> Polynomial([1, 2, 3], :s)\nPolynomial(1 + 2*s + 3*s^2)\n\njulia> one(Polynomial)\nPolynomial(1.0)\n\n\n\n\n\n","category":"type"},{"location":"polynomials/polynomial/#","page":"Polynomial","title":"Polynomial","text":"Pade\nPade(x)","category":"page"},{"location":"polynomials/polynomial/#Polynomials.PolyCompat.PadeApproximation.Pade","page":"Polynomial","title":"Polynomials.PolyCompat.PadeApproximation.Pade","text":"Pade(::Polynomial, m::Integer, n::Integer)\nPade(::Polynomial, ::Polynomial)\n\nReturn Pade approximation of polynomial.\n\nReferences\n\nPade Approximant\n\n\n\n\n\n","category":"type"},{"location":"polynomials/polynomial/#Polynomials.PolyCompat.PadeApproximation.Pade-Tuple{Any}","page":"Polynomial","title":"Polynomials.PolyCompat.PadeApproximation.Pade","text":"(::Pade)(x)\n\nEvaluate the Pade approximant at the given point.\n\nExamples\n\njulia> using SpecialFunctions, Polynomials\n\n\njulia> p = Polynomial(@.(1 // BigInt(gamma(1:17))));\n\n\njulia> pade = Pade(p, 8, 8);\n\njulia> pade(1.0) ≈ exp(1.0)\ntrue\n\n\n\n\n\n\n","category":"method"},{"location":"reference/#Reference/API-1","page":"Reference/API","title":"Reference/API","text":"","category":"section"},{"location":"reference/#","page":"Reference/API","title":"Reference/API","text":"All polynomials have the following functionality. In some cases, there is not a direct function call and therefore the polynomials have to be converted to the standard Polynomial type before continuing.","category":"page"},{"location":"reference/#","page":"Reference/API","title":"Reference/API","text":"Pages = [\"reference.md\"]","category":"page"},{"location":"reference/#","page":"Reference/API","title":"Reference/API","text":"DocTestSetup = quote\n  using Polynomials\nend","category":"page"},{"location":"reference/#Inspection-1","page":"Reference/API","title":"Inspection","text":"","category":"section"},{"location":"reference/#","page":"Reference/API","title":"Reference/API","text":"coeffs\ndegree\nlength\nsize\ndomain\nmapdomain\nchop\nchop!\ntruncate\ntruncate!","category":"page"},{"location":"reference/#Polynomials.coeffs","page":"Reference/API","title":"Polynomials.coeffs","text":"coeffs(::AbstractPolynomial)\n\nReturn the coefficient vector [a_0, a_1, ..., a_n] of a polynomial.\n\n\n\n\n\n","category":"function"},{"location":"reference/#Polynomials.degree","page":"Reference/API","title":"Polynomials.degree","text":"degree(::AbstractPolynomial)\n\nReturn the degree of the polynomial, i.e. the highest exponent in the polynomial that has a nonzero coefficient. The degree of the zero polynomial is defined to be -1.\n\n\n\n\n\n","category":"function"},{"location":"reference/#Base.length","page":"Reference/API","title":"Base.length","text":"length(::AbstractPolynomial)\n\nThe length of the polynomial.\n\n\n\n\n\n","category":"function"},{"location":"reference/#Base.size","page":"Reference/API","title":"Base.size","text":"size(::AbstractPolynomial, [i])\n\nReturns the size of the polynomials coefficients, along axis i if provided.\n\n\n\n\n\n","category":"function"},{"location":"reference/#Polynomials.domain","page":"Reference/API","title":"Polynomials.domain","text":"domain(::Type{<:AbstractPolynomial})\n\nReturns the domain of the polynomial.\n\n\n\n\n\n","category":"function"},{"location":"reference/#Polynomials.mapdomain","page":"Reference/API","title":"Polynomials.mapdomain","text":"mapdomain(::Type{<:AbstractPolynomial}, x::AbstractArray)\nmapdomain(::AbstractPolynomial, x::AbstractArray)\n\nGiven values of x that are assumed to be unbounded (-∞, ∞), return values rescaled to the domain of the given polynomial.\n\nExamples\n\njulia> using Polynomials\n\njulia> x = -10:10\n-10:10\n\njulia> extrema(mapdomain(ChebyshevT, x))\n(-1.0, 1.0)\n\n\n\n\n\n\n","category":"function"},{"location":"reference/#Base.chop","page":"Reference/API","title":"Base.chop","text":"chop(::AbstractPolynomial{T};\n    rtol::Real = Base.rtoldefault(real(T)), atol::Real = 0))\n\nRemoves any leading coefficients that are approximately 0 (using rtol and atol). Returns a polynomial whose degree will guaranteed to be equal to or less than the given polynomial's.\n\n\n\n\n\n","category":"function"},{"location":"reference/#Polynomials.chop!","page":"Reference/API","title":"Polynomials.chop!","text":"chop!(::AbstractPolynomial{T};\n    rtol::Real = Base.rtoldefault(real(T)), atol::Real = 0))\n\nIn-place version of chop\n\n\n\n\n\n","category":"function"},{"location":"reference/#Base.truncate","page":"Reference/API","title":"Base.truncate","text":"truncate(::AbstractPolynomial{T};\n    rtol::Real = Base.rtoldefault(real(T)), atol::Real = 0)\n\nRounds off coefficients close to zero, as determined by rtol and atol, and then chops any leading zeros. Returns a new polynomial.\n\n\n\n\n\n","category":"function"},{"location":"reference/#Polynomials.truncate!","page":"Reference/API","title":"Polynomials.truncate!","text":"truncate!(::AbstractPolynomial{T};\n    rtol::Real = Base.rtoldefault(real(T)), atol::Real = 0)\n\nIn-place version of truncate\n\n\n\n\n\n","category":"function"},{"location":"reference/#Arithmetic-1","page":"Reference/API","title":"Arithmetic","text":"","category":"section"},{"location":"reference/#","page":"Reference/API","title":"Reference/API","text":"All AbstractPolynomials have basic arithmetic operations defined on them (+, -, *, /, ÷, %, ==).","category":"page"},{"location":"reference/#","page":"Reference/API","title":"Reference/API","text":"julia> p = Polynomial([1, 2])\nPolynomial(1 + 2*x)\n\njulia> q = Polynomial([1, 0, -1])\nPolynomial(1 - x^2)\n\njulia> 2p\nPolynomial(2 + 4*x)\n\njulia> 2 + p\nPolynomial(3 + 2*x)\n\njulia> p - q\nPolynomial(2*x + x^2)\n\njulia> p * q\nPolynomial(1 + 2*x - x^2 - 2*x^3)\n\njulia> q / 2\nPolynomial(0.5 - 0.5*x^2)","category":"page"},{"location":"reference/#","page":"Reference/API","title":"Reference/API","text":"gcd","category":"page"},{"location":"reference/#Base.gcd","page":"Reference/API","title":"Base.gcd","text":"gcd(a::AbstractPolynomial, b::AbstractPolynomial)\n\nFind the greatest common denominator of two polynomials recursively using Euclid's algorithm.\n\nExamples\n\njulia> using Polynomials\n\njulia> gcd(fromroots([1, 1, 2]), fromroots([1, 2, 3]))\nPolynomial(4.0 - 6.0*x + 2.0*x^2)\n\n\n\n\n\n\n","category":"function"},{"location":"reference/#Mathematical-Functions-1","page":"Reference/API","title":"Mathematical Functions","text":"","category":"section"},{"location":"reference/#","page":"Reference/API","title":"Reference/API","text":"zero\none\nvariable\nfromroots\nroots\nderivative\nintegrate\nfit\ncompanion\nvander","category":"page"},{"location":"reference/#Base.zero","page":"Reference/API","title":"Base.zero","text":"zero(::Type{<:AbstractPolynomial})\nzero(::AbstractPolynomial)\n\nReturns a representation of 0 as the given polynomial.\n\n\n\n\n\n","category":"function"},{"location":"reference/#Base.one","page":"Reference/API","title":"Base.one","text":"one(::Type{<:AbstractPolynomial})\none(::AbstractPolynomial)\n\nReturns a representation of 1 as the given polynomial.\n\n\n\n\n\n","category":"function"},{"location":"reference/#Polynomials.variable","page":"Reference/API","title":"Polynomials.variable","text":"variable(var=:x)\nvariable(::Type{<:AbstractPolynomial}, var=:x)\nvariable(p::AbstractPolynomial, var=p.var)\n\nReturn the monomial x in the indicated polynomial basis.  If no type is give, will default to Polynomial. Equivalent  to  P(var).\n\nExamples\n\njulia> using Polynomials\n\njulia> x = variable()\nPolynomial(x)\n\njulia> p = 100 + 24x - 3x^2\nPolynomial(100 + 24*x - 3*x^2)\n\njulia> roots((x - 3) * (x + 2))\n2-element Array{Float64,1}:\n -2.0\n  3.0\n\n\n\n\n\n\n","category":"function"},{"location":"reference/#Polynomials.fromroots","page":"Reference/API","title":"Polynomials.fromroots","text":"fromroots(::AbstractVector{<:Number}; var=:x)\nfromroots(::Type{<:AbstractPolynomial}, ::AbstractVector{<:Number}; var=:x)\n\nConstruct a polynomial of the given type given the roots. If no type is given, defaults to Polynomial.\n\nExamples\n\njulia> using Polynomials\n\njulia> r = [3, 2]; # (x - 3)(x - 2)\n\njulia> fromroots(r)\nPolynomial(6 - 5*x + x^2)\n\n\n\n\n\nfromroots(::AbstractMatrix{<:Number}; var=:x)\nfromroots(::Type{<:AbstractPolynomial}, ::AbstractMatrix{<:Number}; var=:x)\n\nConstruct a polynomial of the given type using the eigenvalues of the given matrix as the roots. If no type is given, defaults to Polynomial.\n\nExamples\n\njulia> using Polynomials\n\njulia> A = [1 2; 3 4]; # (x - 5.37228)(x + 0.37228)\n\njulia> fromroots(A)\nPolynomial(-1.9999999999999998 - 5.0*x + 1.0*x^2)\n\n\n\n\n\n","category":"function"},{"location":"reference/#Polynomials.roots","page":"Reference/API","title":"Polynomials.roots","text":"roots(::AbstractPolynomial; kwargs...)\n\nReturns the roots of the given polynomial. This is calculated via the eigenvalues of the companion matrix. The kwargs are passed to the LinearAlgeebra.eigvals call.\n\nnote: Note\nThe PolynomialRoots.jl package provides an alternative that is a bit faster and  abit more accurate; the AMRVW.jl package provides an alternative for high-degree polynomials.\n\n\n\n\n\n","category":"function"},{"location":"reference/#Polynomials.derivative","page":"Reference/API","title":"Polynomials.derivative","text":"derivative(::AbstractPolynomial, order::Int = 1)\n\nReturns a polynomial that is the orderth derivative of the given polynomial. order must be non-negative.\n\n\n\n\n\n","category":"function"},{"location":"reference/#Polynomials.integrate","page":"Reference/API","title":"Polynomials.integrate","text":"integrate(::AbstractPolynomial, C=0)\n\nReturns the indefinite integral of the polynomial with constant C.\n\n\n\n\n\nintegrate(::AbstractPolynomial, a, b)\n\nCompute the definite integral of the given polynomial from a to b. Will throw an error if either a or b are out of the polynomial's domain.\n\n\n\n\n\n","category":"function"},{"location":"reference/#Polynomials.fit","page":"Reference/API","title":"Polynomials.fit","text":"fit(x, y, deg=length(x) - 1; [weights], var=:x)\nfit(::Type{<:AbstractPolynomial}, x, y, deg=length(x)-1; [weights], var=:x)\n\nFit the given data as a polynomial type with the given degree. Uses linear least squares. When weights are given, as either a Number, Vector or Matrix, will use weighted linear least squares. The default polynomial type is Polynomial. This will automatically scale your data to the domain of the polynomial type using mapdomain\n\n\n\n\n\n","category":"function"},{"location":"reference/#Polynomials.companion","page":"Reference/API","title":"Polynomials.companion","text":"companion(::AbstractPolynomial)\n\nReturn the companion matrix for the given polynomial.\n\nReferences\n\nCompanion Matrix\n\n\n\n\n\n","category":"function"},{"location":"reference/#Polynomials.vander","page":"Reference/API","title":"Polynomials.vander","text":"vander(::Type{AbstractPolynomial}, x::AbstractVector, deg::Integer)\n\nCalculate the psuedo-Vandermonde matrix of the given polynomial type with the given degree.\n\nReferences\n\nVandermonde Matrix\n\n\n\n\n\n","category":"function"},{"location":"reference/#Plotting-1","page":"Reference/API","title":"Plotting","text":"","category":"section"},{"location":"reference/#","page":"Reference/API","title":"Reference/API","text":"Polynomials can be plotted directly using Plots.jl.","category":"page"},{"location":"reference/#","page":"Reference/API","title":"Reference/API","text":"plot(::AbstractPolynomial; kwds...)","category":"page"},{"location":"reference/#","page":"Reference/API","title":"Reference/API","text":"will automatically determine a range based on the critical points (roots, extrema and points of inflection).","category":"page"},{"location":"reference/#","page":"Reference/API","title":"Reference/API","text":"plot(::AbstractPolynomial, a, b; kwds...)","category":"page"},{"location":"reference/#","page":"Reference/API","title":"Reference/API","text":"will plot the polynomial within the range [a, b].","category":"page"},{"location":"reference/#Example:-The-Polynomials.jl-logo-1","page":"Reference/API","title":"Example: The Polynomials.jl logo","text":"","category":"section"},{"location":"reference/#","page":"Reference/API","title":"Reference/API","text":"using Plots, Polynomials\n# T1, T2, T3, and T4:\nchebs = [\n  ChebyshevT([0, 1]),\n  ChebyshevT([0, 0, 1]),\n  ChebyshevT([0, 0, 0, 1]),\n  ChebyshevT([0, 0, 0, 0, 1]),\n]\ncolors = [\"#4063D8\", \"#389826\", \"#CB3C33\", \"#9558B2\"]\nitr = zip(chebs, colors)\n(cheb,col), state = iterate(itr)\np = plot(cheb, c=col,  lw=5, legend=false, label=\"\")\nfor (cheb, col) in Base.Iterators.rest(itr, state)\n  plot!(cheb, c=col, lw=5)\nend\nsavefig(\"chebs.svg\"); nothing # hide","category":"page"},{"location":"reference/#","page":"Reference/API","title":"Reference/API","text":"(Image: )","category":"page"},{"location":"#Polynomials.jl-1","page":"Home","title":"Polynomials.jl","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Polynomials.jl is a Julia package that provides basic arithmetic, integration, differentiation, evaluation, and root finding over dense univariate polynomials.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"To install the package, run","category":"page"},{"location":"#","page":"Home","title":"Home","text":"(v1.2) pkg> add Polynomials","category":"page"},{"location":"#","page":"Home","title":"Home","text":"The package can then be loaded into the current session using","category":"page"},{"location":"#","page":"Home","title":"Home","text":"using Polynomials","category":"page"},{"location":"#","page":"Home","title":"Home","text":"DocTestSetup = quote\n  using Polynomials\nend","category":"page"},{"location":"#Quick-Start-1","page":"Home","title":"Quick Start","text":"","category":"section"},{"location":"#Construction-and-Evaluation-1","page":"Home","title":"Construction and Evaluation","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Construct a polynomial from its coefficients, lowest order first.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"julia> Polynomial([1,0,3,4])\nPolynomial(1 + 3*x^2 + 4*x^3)","category":"page"},{"location":"#","page":"Home","title":"Home","text":"An optional variable parameter can be added.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"julia> Polynomial([1,2,3], :s)\nPolynomial(1 + 2*s + 3*s^2)","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Construct a polynomial from its roots.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"julia> fromroots([1,2,3]) # (x-1)*(x-2)*(x-3)\nPolynomial(-6 + 11*x - 6*x^2 + x^3)","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Evaluate the polynomial p at x.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"julia> p = Polynomial([1, 0, -1])\nPolynomial(1 - x^2)\n\njulia> p(1)\n0\n","category":"page"},{"location":"#Arithmetic-1","page":"Home","title":"Arithmetic","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"The usual arithmetic operators are overloaded to work on polynomials, and combinations of polynomials and scalars.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"julia> p = Polynomial([1,2])\nPolynomial(1 + 2*x)\n\njulia> q = Polynomial([1, 0, -1])\nPolynomial(1 - x^2)\n\njulia> 2p\nPolynomial(2 + 4*x)\n\njulia> 2 + p\nPolynomial(3 + 2*x)\n\njulia> p - q\nPolynomial(2*x + x^2)\n\njulia> p * q\nPolynomial(1 + 2*x - x^2 - 2*x^3)\n\njulia> q / 2\nPolynomial(0.5 - 0.5*x^2)\n\njulia> q ÷ p  # `div`, also `rem` and `divrem`\nPolynomial(0.25 - 0.5*x)","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Note that operations involving polynomials with different variables will error.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"julia> p = Polynomial([1, 2, 3], :x)\nPolynomial(1 + 2*x + 3*x^2)\n\njulia> q = Polynomial([1, 2, 3], :s)\nPolynomial(1 + 2*s + 3*s^2)\n\njulia> p + q\nERROR: Polynomials must have same variable\n[...]","category":"page"},{"location":"#Integrals-and-Derivatives-1","page":"Home","title":"Integrals and Derivatives","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Integrate the polynomial p term by term, optionally adding constant term C. The degree of the resulting polynomial is one higher than the degree of p.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"julia> integrate(Polynomial([1, 0, -1]))\nPolynomial(1.0*x - 0.3333333333333333*x^3)\n\njulia> integrate(Polynomial([1, 0, -1]), 2)\nPolynomial(2.0 + 1.0*x - 0.3333333333333333*x^3)","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Differentiate the polynomial p term by term. The degree of the resulting polynomial is one lower than the degree of p.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"julia> derivative(Polynomial([1, 3, -1]))\nPolynomial(3.0 - 2.0*x)","category":"page"},{"location":"#Root-finding-1","page":"Home","title":"Root-finding","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Return the roots (zeros) of p, with multiplicity. The number of roots returned is equal to the order of p. By design, this is not type-stable, the returned roots may be real or complex.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"julia> roots(Polynomial([1, 0, -1]))\n2-element Array{Float64,1}:\n -1.0\n  1.0\n\njulia> roots(Polynomial([1, 0, 1]))\n2-element Array{Complex{Float64},1}:\n 0.0 - 1.0im\n 0.0 + 1.0im\n\njulia> roots(Polynomial([0, 0, 1]))\n2-element Array{Float64,1}:\n 0.0\n 0.0","category":"page"},{"location":"#Fitting-arbitrary-data-1","page":"Home","title":"Fitting arbitrary data","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Fit a polynomial (of degree deg) to x and y using polynomial interpolation or a (weighted) least-squares approximation.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"using Plots, Polynomials\nxs = range(0, 10, length=10)\nys = @. exp(-xs)\nf = fit(xs, ys) # degree = length(xs) - 1 \nf2 = fit(xs, ys, 2) # degree = 2\n\nscatter(xs, ys, markerstrokewidth=0, label=\"Data\")\nplot!(f, extrema(xs)..., label=\"Fit\")\nplot!(f2, extrema(xs)..., label=\"Quadratic Fit\")\nsavefig(\"polyfit.svg\"); nothing # hide","category":"page"},{"location":"#","page":"Home","title":"Home","text":"(Image: )","category":"page"},{"location":"#Other-bases-1","page":"Home","title":"Other bases","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"A polynomial, e.g. a_0 + a_1 x + a_2 x^2 + ... + a_n x^n, can be seen as a collection of coefficients, [a_0, a_1, ..., a_n], relative to some polynomial basis. The most  familiar basis being  the standard one: 1, x, x^2, ...  Alternative bases are possible.  The ChebyshevT polynomials are  implemented, as an example. Instead of Polynomial  or  Polynomial{T}, ChebyshevT or  ChebyshevT{T} constructors are used:","category":"page"},{"location":"#","page":"Home","title":"Home","text":"julia> p1 = ChebyshevT([1.0, 2.0, 3.0])\nChebyshevT(1.0⋅T_0(x) + 2.0⋅T_1(x) + 3.0⋅T_2(x))\n\njulia> p2 = ChebyshevT{Float64}([0, 1, 2])\nChebyshevT(1.0⋅T_1(x) + 2.0⋅T_2(x))\n\njulia> p1 + p2\nChebyshevT(1.0⋅T_0(x) + 3.0⋅T_1(x) + 5.0⋅T_2(x))\n\njulia> p1 * p2\nChebyshevT(4.0⋅T_0(x) + 4.5⋅T_1(x) + 3.0⋅T_2(x) + 3.5⋅T_3(x) + 3.0⋅T_4(x))\n\njulia> derivative(p1)\nChebyshevT(2.0⋅T_0(x) + 12.0⋅T_1(x))\n\njulia> integrate(p2)\nChebyshevT(0.25⋅T_0(x) - 1.0⋅T_1(x) + 0.25⋅T_2(x) + 0.3333333333333333⋅T_3(x))\n\njulia> convert(Polynomial, p1)\nPolynomial(-2.0 + 2.0*x + 6.0*x^2)\n\njulia> convert(ChebyshevT, Polynomial([1.0, 2,  3]))\nChebyshevT(2.5⋅T_0(x) + 2.0⋅T_1(x) + 1.5⋅T_2(x))","category":"page"},{"location":"#","page":"Home","title":"Home","text":"warning: Warning\nThe older  Poly type that this package used prior to v0.7  is implemented as an alternate basis  to provide support for older code bases. As of v1.0,  this type will be only available by executing using Polynomials.PolyCompat.","category":"page"},{"location":"#Iteration-1","page":"Home","title":"Iteration","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"If its basis is implicit, then a polynomial may be  seen as just a vector of  coefficients. Vectors or 1-based, but, for convenience, polynomial types are 0-based, for purposes of indexing (e.g. getindex, setindex!, eachindex). Iteration over a polynomial steps through the basis vectors, e.g. a_0, a_1*x, ...","category":"page"},{"location":"#","page":"Home","title":"Home","text":"julia> as = [1,2,3,4,5]; p = Polynomial(as);\n\njulia> as[3], p[2], collect(p)[3]\n(3, 3, Polynomial(3*x^2))","category":"page"},{"location":"#Related-Packages-1","page":"Home","title":"Related Packages","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"MultiPoly.jl for sparse multivariate polynomials\nMultivariatePolynomials.jl for multivariate polynomials and moments of commutative or non-commutative variables\nAbstractAlgeebra.jl for generic polynomial rings, matrix spaces, fraction fields, residue rings, power series.\nPolynomialRoots.jl for a fast complex polynomial root finder","category":"page"},{"location":"#Contributing-1","page":"Home","title":"Contributing","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"If you are interested in this project, feel free to open an issue or pull request! In general, any changes must be thoroughly tested, allow deprecation, and not deviate too far from the common interface. All PR's must have an updated project version, as well, to keep the continuous delivery cycle up-to-date.","category":"page"},{"location":"polynomials/chebyshev/#Chebyshev-Polynomials-1","page":"Chebyshev","title":"Chebyshev Polynomials","text":"","category":"section"},{"location":"polynomials/chebyshev/#","page":"Chebyshev","title":"Chebyshev","text":"DocTestSetup = quote\n  using Polynomials\nend","category":"page"},{"location":"polynomials/chebyshev/#","page":"Chebyshev","title":"Chebyshev","text":"The Chebyshev polynomials are two sequences of polynomials, T_n and U_n. The Chebyshev polynomials of the first kind, T_n, can be defined by the recurrence relation T_0(x)=1, T_1(x)=x, and T_{n+1}(x) = 2xT_n{x}-T_{n-1}(x). The Chebyshev polynomioals of the second kind, U_n(x), can be defined by U_0(x)=1, U_1(x)=2x, and U_{n+1}(x) = 2xU_n(x) - U_{n-1}(x). Both T_n and U_n have degree n, and any polynomial  of  degree n may be uniquely written as a linear combination of the polynomials T_0, T_1, ..., T_n (similarly with U).","category":"page"},{"location":"polynomials/chebyshev/#First-Kind-1","page":"Chebyshev","title":"First Kind","text":"","category":"section"},{"location":"polynomials/chebyshev/#","page":"Chebyshev","title":"Chebyshev","text":"ChebyshevT","category":"page"},{"location":"polynomials/chebyshev/#Polynomials.ChebyshevT","page":"Chebyshev","title":"Polynomials.ChebyshevT","text":"ChebyshevT{<:Number}(coeffs::AbstractVector, var=:x)\n\nChebyshev polynomial of the first kind.\n\nConstruct a polynomial from its coefficients a, lowest order first, optionally in terms of the given variable x. x can be a character, symbol, or string.\n\nExamples\n\njulia> using Polynomials\n\njulia> ChebyshevT([1, 0, 3, 4])\nChebyshevT(1⋅T_0(x) + 3⋅T_2(x) + 4⋅T_3(x))\n\njulia> ChebyshevT([1, 2, 3, 0], :s)\nChebyshevT(1⋅T_0(s) + 2⋅T_1(s) + 3⋅T_2(s))\n\njulia> one(ChebyshevT)\nChebyshevT(1.0⋅T_0(x))\n\n\n\n\n\n","category":"type"},{"location":"polynomials/chebyshev/#","page":"Chebyshev","title":"Chebyshev","text":"The ChebyshevT type holds coefficients representing the polynomial a_0 T_0 + a_1 T_1 + ... + a_n T_n.","category":"page"},{"location":"polynomials/chebyshev/#","page":"Chebyshev","title":"Chebyshev","text":"For example, the basis polynomial T_4 can be represented with ChebyshevT([0,0,0,0,1]).","category":"page"},{"location":"polynomials/chebyshev/#Conversion-1","page":"Chebyshev","title":"Conversion","text":"","category":"section"},{"location":"polynomials/chebyshev/#","page":"Chebyshev","title":"Chebyshev","text":"ChebyshevT can be converted to Polynomial and vice-versa.","category":"page"},{"location":"polynomials/chebyshev/#","page":"Chebyshev","title":"Chebyshev","text":"julia> c = ChebyshevT([1, 0, 3, 4])\nChebyshevT(1⋅T_0(x) + 3⋅T_2(x) + 4⋅T_3(x))\n\n\njulia> p = convert(Polynomial, c)\nPolynomial(-2 - 12*x + 6*x^2 + 16*x^3)\n\njulia> convert(ChebyshevT, p)\nChebyshevT(1.0⋅T_0(x) + 3.0⋅T_2(x) + 4.0⋅T_3(x))","category":"page"}]
}
